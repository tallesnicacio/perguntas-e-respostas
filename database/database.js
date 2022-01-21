const Sequelize = require('sequelize');

const connection = new Sequelize('projeto01', 'root', 'Tivan123!!',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;