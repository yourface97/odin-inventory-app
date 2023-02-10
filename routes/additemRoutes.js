const express = require('express');
const router = express.Router();
const { get_addItem, post_addItem } = require('../controllers/itemController');

router.get('/', get_addItem);

router.post('/', post_addItem);

module.exports = router;