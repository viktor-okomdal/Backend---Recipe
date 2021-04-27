const db = require('../Database/connection.js')
const {DataTypes} = require('sequelize')

const Ingredient = db.define('Ingredient',{
  name:{
    type: DataTypes.STRING,
    allowNull: false,

  }
})


Ingredient.getPage = async(page) =>{
  const ingredients = await Ingredient.findAll({
    limit:5,
    offset:(page-1) * 5
  })
  return  ingredients
}

module.exports = Ingredient