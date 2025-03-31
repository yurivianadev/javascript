const Sequelize = require('sequelize')

 // Conexão com o banco de dados mysql
 const sequelize = new Sequelize('postapp', 'root', '91313826', {
    host: "localhost",
    dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}