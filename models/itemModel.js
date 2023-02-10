const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    stock: { type: Number, required: true }
});

itemSchema.virtual('url').get(function(){
    return `/items/${this._id}`;
});

module.exports = mongoose.model('Item', itemSchema);