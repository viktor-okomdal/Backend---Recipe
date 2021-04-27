const {Router} = require('express')

const router = new Router()
const IngredientController = require('../Controller/IngredientController.js')



router.get('/ingredient/:page', IngredientController.getIngredients)


module.exports = router