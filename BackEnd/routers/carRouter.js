const express = require('express');
const router = express.Router();
const upload = require('../utils/multer');
const multerErrorHandler = require('../utils/multerErrorHandler'); // Import the error handler
const carController = require('../controllers/carController');

// Route to create a car with multiple images
router.post(
    '', 
    upload.array('images', 10), // Multer middleware for multiple file uploads
    multerErrorHandler,         // Multer error handler to catch any errors
    carController.createCar      // Controller for creating a car
);

// Get all cars
router.get('', carController.getAllCars);

// Get a car by ID
router.get('/:id', carController.getCarById);

// Update a car by ID
router.put('/:id', carController.updateCar);

// Delete a car by ID
router.delete('/:id', carController.deleteCar);

// Delete a single image from the car
router.delete('/:id/images/:imageIndex', carController.deleteImage);

// Update a single image for a car
router.put(
    '/:id/images/:imageIndex', 
    upload.single('image'),     // Multer middleware for single file upload
    multerErrorHandler,         // Error handling for the image upload
    carController.updateImage   // Controller to handle image update
);

module.exports = router;
