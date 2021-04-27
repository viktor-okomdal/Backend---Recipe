const {Router} = require('express')

const router = new Router()
const UserController = require('../Controller/UserController.js')
const Auth = require('../Middleware/authenticate.js')



router.post('/register', UserController.register)
router.post('/auth', UserController.login)
// router.get('/me', Auth.user, UserController.me)


module.exports = router
