const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc2', 'root', 'linux', {
    host: 'localhost',
    dialect: 'mysql',
})

try {

    sequelize.authenticate()
    console.log('Conectado ao MYSQL')

}catch(error) {
    console.log(`Não foi possível conectar: ${error}`)
}

module.exports = sequelize