// здесь будут роуты для регистрации и залогинивания, потому что они не требуют токена
const notokenAuth = require('express').Router();
const { createUser, login } = require('../controllers/users');

notokenAuth.post('/', login);
notokenAuth.post('/register', createUser);

module.exports = notokenAuth;

/*
Пример корректного body для регистрации:

POST http://localhost:3000/login/register
{
    "name": "User WithPassword",
    "about": "Some userinfo",
    "avatar": "https://my.site/ava123.jpg",
    "email": "testuser@yandex.ru",
    "password": "12345"
}

*/
