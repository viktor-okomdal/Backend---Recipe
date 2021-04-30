const db = require('./connection.js')
const User = require ('../Models/User.js')
const Ingredients = require('../Models/Ingredients')
const Recipe = require('../Models/Recipe')
const RecipeIngredient = require('../Models/RecipeIngredient')

db.sync()