require("dotenv").config();
const fs = require('fs');
const path = require('path');
const Car = require('../models/carModel');


exports.createCar = async (req, res) => {
    try {
        const { brand, model, color, gear, fuel_type, price, description, year } = req.body;
        const images = req.files.map(file => file.filename);  // Store only the file names

        const newCar = new Car({
            brand,
            model,
            color,
            gear,
            fuel_type,
            price,
            description,
            images,
            year

        });

        const savedCar = await newCar.save();
        res.status(201).json(savedCar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all cars
exports.getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        const baseURL = `${process.env.BASE_URL}/uploads/cars/`;  // The base URL for your image directory

        // Map through each car and modify the images array by concatenating the base URL
        const modifiedCars = cars.map(car => {
            return {
                ...car.toObject(),  // Convert Mongoose document to plain object
                images: car.images.map(image => baseURL + image),  // Concatenate base URL with the image filename
                createdAt: car.createdAt,  // Will be automatically formatted to Addis Ababa time zone with AM/PM
                updatedAt: car.updatedAt   // Will be automatically formatted to Addis Ababa time zone with AM/PM

            };
        });

        res.status(200).json(modifiedCars);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Get a car by ID
exports.getCarById = async (req, res) => {
    try {
        const baseURL = `${process.env.BASE_URL}/uploads/cars/`;  // The base URL for your image directory

        const carId = req.params.id;
        const car = await Car.findById(carId);

        if (!car) {
            return res.status(404).json({ message: 'Car not found' });
        }

        // Send the car with the correctly formatted timestamps
        res.status(200).json({
            ...car.toObject(),  // Convert Mongoose document to plain object
            images: car.images.map(image => baseURL + image),  // Concatenate base URL with the image filename
            createdAt: car.createdAt,  // Will be automatically formatted to Addis Ababa time zone with AM/PM
            updatedAt: car.updatedAt   // Will be automatically formatted to Addis Ababa time zone with AM/PM

        });

    } catch (err) {
        console.error('Error retrieving car:', err);
        res.status(500).json({ error: err.message });
    }
};

// Update a car by ID
exports.updateCar = async (req, res) => {
    try {
        const updateCar = await Car.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updateCar);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a car by ID
exports.deleteCar = async (req, res) => {
    try {
        const carId = req.params.id.trim();  // Ensure no extra spaces or newlines
        const car = await Car.findByIdAndDelete(carId);
        if (!car) return res.status(404).json({ message: 'Car not found' });

        // Delete images from the server
        car.images.forEach(image => {
            const imagePath = path.join(__dirname, '../uploads/cars', image);
            console.log('Attempting to delete:', imagePath);  // Log the path for debugging

            // Check if the file exists before attempting to delete
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);  // Delete image file from the server
            } else {
                console.log(`File does not exist: ${imagePath}`);
            }
        });

        res.status(200).json({ message: 'Car deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a single image from car
// Delete a single image from car
exports.deleteImage = async (req, res) => {
    try {
        // Destructure the carId and imageIndex from the request params
        const { id: carId, imageIndex } = req.params;

        // Trim the carId to remove any extra spaces (optional, based on your input data)
        const carIdTrimmed = carId.trim();

        // Find the car by ID
        const car = await Car.findById(carIdTrimmed);
        if (!car) return res.status(404).json({ message: 'Car not found' });

        // Get the image to delete from the car's images array
        const imageToDelete = car.images[imageIndex];
        if (!imageToDelete) return res.status(404).json({ message: 'Image not found' });

        // Remove the image filename from the database
        car.images.splice(imageIndex, 1);

        // Construct the file path to the image to be deleted
        const imagePath = path.join(__dirname, '../uploads/cars', imageToDelete);

        // Check if the file exists before trying to delete
        if (fs.existsSync(imagePath)) {
            // Delete the image file asynchronously
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error('Error deleting the file:', err);
                    return res.status(500).json({ message: 'Error deleting the image file' });
                }

                console.log(`Successfully deleted image: ${imagePath}`);

                // Save the car with the updated images array
                car.save()
                    .then(() => {
                        res.status(200).json({ message: 'Image deleted successfully', car });
                    })
                    .catch(saveErr => {
                        console.error('Error saving the car:', saveErr);
                        res.status(500).json({ message: 'Error saving the car after image deletion' });
                    });
            });
        } else {
            console.log(`File does not exist: ${imagePath}`);
            // Proceed with saving the car even if the file doesn't exist
            await car.save();
            res.status(200).json({ message: 'Image deleted from database successfully, but file not found' });
        }
    } catch (err) {
        console.error('Error in deleteImage function:', err);
        res.status(500).json({ error: err.message });
    }
};
// Update a single image for the car
exports.updateImage = async (req, res) => {
    try {
        const { id: carId, imageIndex } = req.params;
        const carIdTrimmed = carId.trim();

        // Find the car by ID
        const car = await Car.findById(carIdTrimmed);
        if (!car) return res.status(404).json({ message: 'Car not found' });

        const imageToUpdate = car.images[imageIndex];
        if (!imageToUpdate) return res.status(404).json({ message: 'Image not found' });

        // Handle the uploaded image
        const newImage = req.file?.filename; // Access the uploaded file
        if (!newImage) return res.status(400).json({ message: 'New image is required' });

        // Delete the old image if it exists
        const oldImagePath = path.join(__dirname, '../uploads/cars', imageToUpdate);
        if (fs.existsSync(oldImagePath)) {
            fs.unlinkSync(oldImagePath);
            console.log(`Deleted old image: ${oldImagePath}`);
        }

        // Update the car image
        car.images[imageIndex] = newImage;
        await car.save();

        res.status(200).json({ message: 'Image updated successfully', car });
    } catch (err) {
        console.error('Error in updateImage function:', err);
        res.status(500).json({ error: err.message });
    }
};

