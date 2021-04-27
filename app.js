const express = require('express')
require('dotenv').config()

  const app = express()
  const userRoutes = require('./Routes/users.js')
  const ingredientRoutes = require('./Routes/ingredients.js')
  const {errorHandler} = require('./Middleware/errorHandler.js')

app.use( express.json() )

app.use('/api/v1', userRoutes)
app.use('/api/v1', ingredientRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log(`Running on port ${PORT}`))