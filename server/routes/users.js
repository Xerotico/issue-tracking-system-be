'use strict';

const express = require('express');
const controller = require('../controllers/users');

const router = express.Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getUserById);
router.post('/register', controller.createUser);
router.post('/login', controller.logIn);

module.exports = router;
