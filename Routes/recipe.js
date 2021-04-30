const {Router} = require('express')

const router = new Router()
const RecipeController = ('../Controller/RecipeController.js')

router.post('/recipes', RecipeController.createRecipe)



module.exports = router