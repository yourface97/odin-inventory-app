const express = require('express');
const router = express.Router();
const { get_Categories, get_ItemsByCat } = require('../controllers/categoryController');

router.get('/', get_Categories);

router.get('/:id', get_ItemsByCat);

module.exports = router;