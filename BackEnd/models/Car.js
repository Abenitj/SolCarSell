const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    gear: {
        type: String,
        required: true,
    },
    fuel_type: {
        type: String,
          required: true,
     },
    price: {
        type: Number,
        required: true,
    },
    description :{
        type: String,
        required: false,
    },  
    images: [
        { type: String }
    ] 
    
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;
