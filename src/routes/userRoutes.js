const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { checkToken } = require('../middleware/authentication');

router.get('/users',checkToken, userController.getUsers);
router.get('/users/:id',checkToken, userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);


module.exports = router;
