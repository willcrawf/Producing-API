const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pizzaSchema = Schema({
    type: String,
    dippingSauce: Boolean,
    rating: Number
},{
    timestamps: true
}
)

module.exports = mongoose.model('Pizza', pizzaSchema)