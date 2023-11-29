const mongoose = require("mongoose")
const furnitureSchema = mongoose.Schema({
itemName:{
        type:String,
        required:true,
        validate: {
            validator: function (value) {
                // You can customize this validation logic according to your requirements
                return /^[a-zA-Z\s]+$/.test(value); // Example: Allow only letters and spaces
            },
            message: "Invalid itemName, please use only letters and spaces.",
        },
    },
quantity:{
        type:Number,
        required:true,
        min:1,
        max:90
    },
cost:{
     type:Number,
     required:true,
     min:10,
     max:750
} 
})
module.exports = mongoose.model("furniture",furnitureSchema)