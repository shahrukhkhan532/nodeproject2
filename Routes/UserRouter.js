const express = require('express');
const { getAllUsers, addUser } = require('../Controllers/UserController');

const UserRouter = express.Router();

UserRouter.get(`/`, getAllUsers);
UserRouter.post(`/`, addUser);

module.exports = UserRouter