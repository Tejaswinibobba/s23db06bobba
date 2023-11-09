const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
itemName: String,
quantity: Number,
cost: Number
})
module.exports = mongoose.model("furniture",furnitureSchema)