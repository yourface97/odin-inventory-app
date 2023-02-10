const express = require('express');
const router = express.Router();
const { get_addItem, post_addItem } = require('../controllers/itemController');
const { get_addCat, post_addCat } = require('../controllers/categoryController');

router.get('/item', get_addItem);

router.post('/item', post_addItem);

router.get('/category', get_addCat);

router.post('/category', post_addCat);

module.exports = router;