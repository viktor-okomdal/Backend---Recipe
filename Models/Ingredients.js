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
    offset:(page-1) * 5,
  })
  return  ingredients
}

Ingredient.filterIngredients = async(name) => {
  const filteredIngredient = await Ingredient.findAll({
    where:{
      name:name
    }
  })
  return filteredIngredient
}



// Ingredient.filterIngredients = async(array, ingredientName) => array.filter(ingredient => ingredient.name == ingredientName)


module.exports = Ingredient