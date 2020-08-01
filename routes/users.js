const usersRouter = require('express').Router();
const { getAllUsers, getUserById } = require('../controllers/users');

usersRouter.get('/', getAllUsers);
// usersRouter.post('/signup', createUser);   теперь в другом роуте
usersRouter.get('/:userId', getUserById);

module.exports = usersRouter;
