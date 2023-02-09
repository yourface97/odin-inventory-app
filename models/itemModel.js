const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    stock: Number,
});

itemSchema.virtual('url').get(() => {
    return `/items/${this._id}`;
});

module.exports = mongoose.model('Item', itemSchema);