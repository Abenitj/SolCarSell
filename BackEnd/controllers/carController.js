const Joi = require('joi');
const fs = require('fs');
const path = require('path');
const Car = require('../models/Car');

// Validation schema
const carSchema = Joi.object({
    brand: Joi.string().required(),
    model: Joi.string().required(),
    color: Joi.string().required(),
    gear: Joi.string().required(),
    fuel_type: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().optional(),
});

// Create a car
const createCar = async (req, res) => {
    try {
        console.log(req.body);
        const { error } = carSchema.validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        const car = new Car({
            ...req.body,
            images: req.files.map(file => file.path) // Store image paths
        });
        await car.save();
        res.status(201).send(car);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all cars
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find();
        res.send(cars);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a car by ID
const getCarById = async (req, res) => {
    try {
        const { id } = req.params; // Get car ID from URL
        console.log(id)
        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }
        res.send(car);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a car by ID
const updateCar = async (req, res) => {
    try {
        const { id } = req.params; // Get car ID from URL
        const updates = req.body; // Get updated data from request body

        const { error } = carSchema.validate(updates);
        if (error) return res.status(400).send(error.details[0].message);

        // Check if images were uploaded, and if so, add them to updates
        if (req.files) {
            updates.images = req.files.map(file => file.path);
        }

        const car = await Car.findByIdAndUpdate(id, updates, { new: true, runValidators: true });

        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }

        res.send(car);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a car by ID
const deleteCar = async (req, res) => {
    try {
        const { id } = req.params; // Get car ID from URL
        const car = await Car.findByIdAndDelete(id);

        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }

        // Assuming car.images is an array of image paths
        const imagePaths = car.images;

        // Delete images from the file system
        imagePaths.forEach((imagePath) => {
            fs.unlink(path.resolve(imagePath), (err) => {
                if (err) {
                    console.error(`Error deleting image: ${imagePath}`, err);
                }
            });
        });

        res.send({ message: 'Car and associated images deleted successfully' });
    } catch (error) {
        res.status(500).send(error);
    }
};

// Add an image to a car
const addImage = async (req, res) => {
    try {
        const { id } = req.params; // Get car ID from URL
        const car = await Car.findById(id);

        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }

        // Add new images to the existing images array
        car.images.push(...req.files.map(file => file.path));
        await car.save();

        res.status(200).send(car);
    } catch (error) {
        res.status(400).send({ message: 'Error adding images', error });
    }
};

// Update a specific image
const updateImage = async (req, res) => {
    try {
        const { id } = req.params; // Get car ID from URL
        const oldImageUrl = req.body.oldImageUrl; // Get old image URL from request body
        const newImageUrl = req.file.path; // Get new image URL from uploaded file

        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }

        const imageIndex = car.images.indexOf(oldImageUrl);
        if (imageIndex > -1) {
            car.images[imageIndex] = newImageUrl; // Update the image
            await car.save();

            // Delete the old image from the file system
            fs.unlink(path.resolve(oldImageUrl), (err) => {
                if (err) {
                    console.error(`Error deleting old image: ${oldImageUrl}`, err);
                }
            });

            res.status(200).send(car);
        } else {
            return res.status(404).send({ message: 'Image not found' });
        }
    } catch (error) {
        res.status(400).send({ message: 'Error updating image', error });
    }
};

// Delete a specific image from a car
const deleteImage = async (req, res) => {
    try {
        const { id, imageUrl } = req.params; // Get car ID and image URL from URL

        const car = await Car.findById(id);
        if (!car) {
            return res.status(404).send({ message: 'Car not found' });
        }

        const imageIndex = car.images.indexOf(imageUrl);
        if (imageIndex > -1) {
            // Remove the image from the array
            car.images.splice(imageIndex, 1);
            await car.save();

            // Delete the image from the file system
            fs.unlink(path.resolve(imageUrl), (err) => {
                if (err) {
                    console.error(`Error deleting image: ${imageUrl}`, err);
                }
            });

            res.status(200).send(car);
        } else {
            return res.status(404).send({ message: 'Image not found' });
        }
    } catch (error) {
        res.status(400).send({ message: 'Error deleting image', error });
    }
};

module.exports = {
    createCar,
    getAllCars,
    getCarById,
    updateCar,
    deleteCar,
    addImage,
    updateImage,
    deleteImage
};
