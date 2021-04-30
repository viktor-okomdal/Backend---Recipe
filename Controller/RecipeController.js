const { InvalidBody, RecipeError } = require("../Errors/errors")
const Recipe = require('../Models/Recipe')
const RecipeIngredient = require('../Models/RecipeIngredient')



module.exports = {
  async createRecipe(req, res, next) {
    try{
      const {instruction, ingredients} = req.body

      if(!instruction || ingredients){
        throw new InvalidBody(['instruction', 'ingredients'])
      }

      const recipe = await Recipe.create({ instruction })
      const recipeIngredient = await RecipeIngredient.create({ ingredients })
      res.json({ message: 'Recipe created!' })
    } catch (error) { next(error) }
  },

}