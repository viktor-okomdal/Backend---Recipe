const {Unauthorized} = require('../Errors/errors')
const User = require('../Models/User.js')

module.exports = {
  user: (req, res, next) => {
      const {authorization} = req.headers
      if(!authorization){
        throw new Unauthorized()
      }
      const token = authorization.replace('Bearer ', '')
      const user = User.validateToken(token)
      req.user = user
      next()
  } 
}