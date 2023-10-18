const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');
const AuthMiddleware = require('../middlewares/AuthMiddleware')

router.post('/register',UserController.register);
router.post('/login',AuthController.login);
router.post('/logout', AuthMiddleware.verifyLocalToken, AuthController.logout);
router.get("/verifyEmail/:token",AuthMiddleware.verifyMailedToken,AuthController.verifyEmail)

module.exports = router
