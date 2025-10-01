const express = require('express');
const router = express.Router();
const PersonController = require('../controllers/PersonController');

// Rota GET para obter todas as pessoas
router.get('/', PersonController.getAll);

// Rota POST para criar uma nova pessoa
router.post('/', PersonController.create);

// Rota GET para obter uma pessoa por ID
router.get('/:id', PersonController.getById);

module.exports = router;
