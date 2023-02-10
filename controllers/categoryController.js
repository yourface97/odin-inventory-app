const Category = require('../models/categoryModel');
const Item = require('../models/itemModel');

const get_Categories = async (req, res) => {
    const categories = (await Category.find({})).map(cat => {
        return { name: cat.name, description: cat.description, url: cat.url };
    });
    res.render('../views/categories', { cats: categories });
};

const get_ItemsByCat = async (req, res) => {
    const items = (await Item.find({category: req.params.id})).map(item => {
        return { name: item.name, url: item.url };
    });
    console.log(items);
    res.render('../views/items', { items: items });
};

const get_addCat = async (req, res) => {
    res.render('../views/addCategory');
};

const post_addCat = async (req, res) => {
    const { name, description } = req.body;
    const newCat = new Category({
        name: name,
        description: description
    })
    await newCat.save();
    res.redirect('/categories')
};

module.exports = {
    get_Categories,
    get_ItemsByCat,
    get_addCat,
    post_addCat
};