const {Sequelize} = require('sequelize')

const db = new Sequelize({
  dialect: 'sqlite',
  storage: 'Database/recipe.db'
})

module.exports = db