let vcapCredentials = require('./vcapConfig').vcapCredentials;

module.exports = {
  client: 'mysql',
  connection: {
    host : vcapCredentials.MYSQL_HOST,
    user : vcapCredentials.MYSQL_USER,
    password : vcapCredentials.MYSQL_PASSWORD,
    database : vcapCredentials.DATABASE_NAME
  }
}