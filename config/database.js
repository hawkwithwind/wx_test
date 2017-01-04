module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "wx",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": console.log,
    "charset": "utf8mb4",
    "dialectOptions":{
      "collate": "utf8mb4_unicode_ci"
      }
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "wx_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": console.log,
    "charset": "utf8mb4",
    "dialectOptions":{
      "collate": "utf8mb4_unicode_ci"
    }
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": "wx",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "logging": false,
    "charset": "utf8mb4",
    "dialectOptions":{
      "collate": "utf8mb4_unicode_ci"
    }    
  }
}
