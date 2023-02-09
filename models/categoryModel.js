const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: String,
    description: String
});

categorySchema.virtual('url').get(function(){
    return `/categories/${this._id}`
});

module.exports = mongoose.model('Category', categorySchema);