const mongoose = require('mongoose');
const moment = require('moment-timezone'); // Import moment-timezone

const carSchema = new mongoose.Schema(
  {
    brand: { type: String, required: true },
    model: { type: String, required: true },
    color: { type: String, required: true },
    gear: { type: String, required: true },
    fuel_type: { type: String, required: true },
    year: { type: String, required: true },
    status: { 
        type: String, 
        required: true, 
        enum: ['Available', 'Not Available'],  // Enum for status field
        default: 'Available'  // Default to 'Available' if not provided
    },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: [{ type: String }]  // Array of file URLs (full URLs)
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

// Custom getter for `createdAt` and `updatedAt` fields to convert to Addis Ababa Time (UTC+3) and format it with AM/PM
carSchema.path('createdAt').get(function(value) {
  return moment(value).tz('Africa/Addis_Ababa').format('YYYY-MM-DD hh:mm:ss A');
});

carSchema.path('updatedAt').get(function(value) {
  return moment(value).tz('Africa/Addis_Ababa').format('YYYY-MM-DD hh:mm:ss A');
});

// Generate a full URL for images dynamically (this can be done in a controller when sending data to the client)
carSchema.methods.getFullImageURLs = function () {
  const baseURL = 'http://localhost:3000/uploads/';  // Base URL for static file serving
  return this.images.map(image => baseURL + image);
};

module.exports = mongoose.model('Car', carSchema);
