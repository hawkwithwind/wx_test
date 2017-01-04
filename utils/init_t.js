#!/usr/bin/env node
var db = require('../models');
var Promise = require('bluebird');

var cs = [
  {
    'name':'中国',
    'code':'CN'
  }
];

var als = [
  {
    'name':'省',
    'parentId':null,
    'countryId':{'code':'CN'}
  },
  {
    'name':'市',
    'parentId': {'name': '省'},
    'countryId':{'code':'CN'}
  },
  {
    'name':'区',
    'parentId': {'name': '市'},
    'countryId':{'code': 'CN'}
  }
];

var createCountry = function(c) {
  return db.Country.create(c);
}

var createAreaLevel = function(al) {
  var alname = al.name;
  var alparentId = null;
  var alcountryId = null;

  return db.Country.findOne({where:{'code':al.countryCode}})
    .then(function(cn){
      alcountryId = cn.get('id');
      if(al.parentId) {
	return db.AreaLevel.findOne({where:{name:al.parentId.name, countryId:alcountryId}});
      } else {
	return null;
      }
    })
    .then(function(parent){
      if(parent) {
	alparentId = parent.id;
      } else {
	alparentId = null;
      }
      return db.AreaLevel.create({name:alname, parentId:alparentId, countryId:alcountryId});
    });
};

Promise.each(cs, createCountry)
  .then(function(c){
    return Promise.each(als, createAreaLevel);
  });

