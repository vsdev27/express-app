// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/usercontroller');
const upload = require('../uploads');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.post('/',upload.single('file'), userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
