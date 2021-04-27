
const fs = require('fs');
const Ingredient = require('../Models/Ingredients');

  (()=>{
   try{
   const data = fs.readFileSync('Database/appendix.txt', 'utf8')
   const ingredients = data.trim().split("\n")
   for( ingredient of ingredients){
     Ingredient.create({name:ingredient})

   }
   }catch(err){
     console.log(err);
   }
 })()





// const db = require("./database.js")



// db.serialize(() => {
//   db.run("DROP TABLE IF EXISTS users")
//   db.run("DROP TABLE IF EXISTS ingredients")
//   db.run("DROP TABLE IF EXISTS recipe")
//   db.run("DROP TABLE IF EXISTS recipe_ingredient")

//   db.run(`CREATE TABLE "users" 
//   ("id" INTEGER NOT NULL,
//   "username" TEXT NOT NULL,
//    "password" TEXT NOT NULL,
//    PRIMARY KEY ("id" AUTOINCREMENT));`)

//   db.run(`CREATE TABLE "ingredients"
//   ("ingredientID" INTEGER NOT NULL,
//     "name" TEXT NOT NULL,
//     PRIMARY KEY ("ingredientID" AUTOINCREMENT));`)

//   db.run(`CREATE TABLE "recipe"
//   ("recipeID" INTEGER NOT NULL,
//     "userID" INTEGER NOT NULL,
//     "ingredients" TEXT NOT NULL,
//     "instruction list" TEXT NOT NULL,
//     FOREIGN KEY ("userID") REFERENCES "users"("userID"),
//     PRIMARY KEY("recipeID" AUTOINCREMENT));`)

//     db.run(`CREATE TABLE "recipe_ingredient"
//     ("recipeID" INTEGER NOT NULL,
//     "ingredientID" INTEGER NOT NULL,
//     FOREIGN KEY ("ingredientID") REFERENCES "ingredients"("ingredientID"),
//     FOREIGN KEY ("recipeID") REFERENCES "recipes"("recipeID"));`)

//    db.get("PRAGMA foreign_keys = ON")
// })
