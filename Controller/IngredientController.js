const Ingredient = require("../Models/Ingredients");

module.exports = {
  async getIngredients(req, res, next){
    try{
      const {page} = req.params
      ingredients = await Ingredient.getPage(page)
      res.json(ingredients)


    }catch(error){next(error)}

  }
}