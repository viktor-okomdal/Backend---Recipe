const db = require('./connection.js')
const User = require ('../Models/User.js')
const Ingredients = require('../Models/Ingredients')

db.sync()