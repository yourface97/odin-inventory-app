const Category = require('../models/categoryModel');
const Item = require('../models/itemModel');

const get_Categories = async (req, res) => {
    const categories = (await Category.find({})).map(cat => {
        return { name: cat.name, description: cat.description, url: `/categories/${cat._id}` };
    });
    res.render('../views/categories', { cats: categories });
};

const get_ItemsByCat = async (req, res) => {
    const items = (await Item.find({category: req.params.id})).map(item => {
        return { name: item.name, url: `/items/${item._id}` };
    });
    console.log(items);
    res.render('../views/items', { items: items });
};

module.exports = {
    get_Categories,
    get_ItemsByCat
};