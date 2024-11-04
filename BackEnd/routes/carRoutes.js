const express = require('express');
const multer = require('multer');
const path = require('path');
const {
    createCar,
    getAllCars,
    getCarById, 
    updateCar,
    deleteCar,
    addImage,
    updateImage,
    deleteImage
} = require('../controllers/carController');

const router = express.Router();

// Set up storage engine for Multer
const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

// Initialize upload
const upload = multer({
    storage: storage,
}).array('images', 10);

// Set up multer for a single file upload
const update = multer({
    storage: storage,
}).single('image'); 

// Routes

router.get('/', getAllCars); // Get all cars
router.get('/:id', getCarById); // Get car by ID
router.post('/', upload, createCar); // Create car
router.put('/:id', upload, updateCar); // Update car by ID
router.delete('/:id', deleteCar); // Delete car by ID

// Image-specific routes
router.post('/:id/images', upload, addImage); // Add a new image to a car
router.put('/:id/images', update, updateImage); // Updated the route for consistency
router.delete('/:id/images/:imageUrl', deleteImage); // Delete a specific image from a car

module.exports = router;
