const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExpenseSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    spend:{
        type: Number,
        reuqired: true
    },
    borrow:{
        type: Number,
        reuqired: true
    }
}, {timestamps: true})

module.exports = mongoose.model("ExpenseSchema", ExpenseSchema);