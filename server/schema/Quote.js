const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    quote: {type: String},
    author: {type: String},
    ratings: {type: Array, default: []}
})

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = Quote;