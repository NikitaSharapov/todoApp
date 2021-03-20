//регистрация и авторизация пользователя
const mongoose = require('mongoose');
const router = require('express').Router();
const User = mongoose.model('User');
const auth = require('../auth');
const ObjectID =require('mongodb').ObjectID;

const userController = require('../../controllers/userController')

//Запрос на регистрацию нового пользователя
router.post('/signup', auth.optional, userController.signup );

//запрос на авторизацию
router.post('/signin', auth.optional, userController.signin );

//запрос на удаление авторизованного пользователя
router.delete('/delete', auth.required, userController.delete );

module.exports = router;