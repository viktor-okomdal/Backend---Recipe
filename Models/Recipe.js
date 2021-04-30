const db = require('../Database/connection.js')
const {DataTypes} = require('sequelize')



const Recipe = db.define('Recipe',{
  instruction:{
    type: DataTypes.STRING,
    allowNull: false
  },
})



module.exports = Recipe