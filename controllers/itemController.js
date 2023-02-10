const Item = require('../models/itemModel');
const Category = require('../models/categoryModel')

const get_Items = async (req, res) => {
    const items = (await Item.find({})).map(item => {
        return {
            name: item.name,
            url: item.url
        }
    });
    res.render('../views/items', {items: items});
};

const get_Item = async (req, res) => {
    const item = await Item.find({_id: req.params.id}).populate('category');
    res.render('../views/item', { name: item[0].name, description: item[0].description, category: item[0].category.name, stock: item[0].stock })
};

const get_addItem = async (req, res) => {
    const cats = (await Category.find({})).map(cat => {
        return { name: cat.name }
    })
    res.render('../views/addItem', { cats: cats })
};

const post_addItem = async (req, res) => {
    const { name, description, category, stock } = req.body;
    const cat = await Category.find({ name: category });
    const newItem = new Item({
        name: name,
        description: description,
        category: cat[0]._id,
        stock: stock
    });
    await newItem.save();
    res.redirect('/items');
};

module.exports = {
    get_Items,
    get_Item,
    get_addItem,
    post_addItem
};