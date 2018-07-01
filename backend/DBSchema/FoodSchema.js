const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
});

mongoose.model('Food', FoodSchema);
module.exports = mongoose;