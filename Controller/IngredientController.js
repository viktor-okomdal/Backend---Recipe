const Ingredient = require("../Models/Ingredients");

module.exports = {
  async getIngredients(req, res, next){
    try{
      const {page} = req.params
      const {name} = req.query
      if(page && !name){
     let ingredients = await Ingredient.getPage(page)
      res.json(ingredients)
    } else if(page && name){
      let ingredient = await Ingredient.filterIngredients(name)
      res.json(ingredient)
    }


    }catch(error){
      res.json(error.message)
    }

  }
}