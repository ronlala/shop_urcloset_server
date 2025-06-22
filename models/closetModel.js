const mongoose = require("mongoose"); 


// const {Schema} = mongoose;

//Edit all of the schema to add all of your clothing data here

const ClosetSchema = new mongoose.Schema({
    brand: {
        type:String,
        required: true,
        trim: true, },
    color:{
        type: String,
        required: true,
        trim: true},
    size: {
        type: String,
        required: true,
        trim: true,},
    category: {
        type: String,
        required: true,},
    purchdate :{
        type: Date,
        required: true,},
    price: {
        type: Number,
        required: true,},
    image: {
        type: String,
        required: true,
        trim: true,}
});

const Closet = mongoose.model("Closet", ClosetSchema);

module.exports = Closet;