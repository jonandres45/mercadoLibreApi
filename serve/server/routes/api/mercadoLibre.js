const express = require('express');
const router = express.Router();
const MercadoLibreController = require('../../controller/mercadoLibre.controller');

router.get('/:data/:offset?', MercadoLibreController.searchItem);

module.exports = router;