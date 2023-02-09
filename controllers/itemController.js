const Item = require('../models/itemModel');

const get_Items = async (req, res) => {
    const items = (await Item.find({})).map(item => {
        return {
            name: item.name,
            url: item.url
        }
    });
    console.log(items);
    res.render('../views/items', {items: items});
};

const get_Item = async (req, res) => {
    const item = await Item.find({_id: req.params.id}).populate('category');
    console.log(item)
    res.render('../views/item', { name: item[0].name, description: item[0].description, category: item[0].category.name, stock: item[0].stock })
}

module.exports = {
    get_Items,
    get_Item
};