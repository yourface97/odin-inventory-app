const express = require('express');
const router = express.Router();
const { get_Items, get_Item } = require('../controllers/itemController');

router.get('/', get_Items);

router.get('/:id', get_Item);

module.exports = router;