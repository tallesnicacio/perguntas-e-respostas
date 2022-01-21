const Sequelize = require('sequelize');

const connection = new Sequelize('projeto01', 'root', 'Tivan123!!',{
    host: 'https://agraiperguntas.herokuapp.com/',
    dialect: 'mysql'
});

module.exports = connection;
