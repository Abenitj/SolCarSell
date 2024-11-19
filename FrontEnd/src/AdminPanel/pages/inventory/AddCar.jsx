import React, { useState } from 'react';
import { createCar } from '../../../api/create';
import { useNavigate } from 'react-router-dom';
import ErrorMessage from '../../../components/ErrorMessage';

const AddCar = () => {
  const navigate = useNavigate();
  const [carData, setCarData] = useState({
    brand: '',
    price: '',
    year: '',
    description: '',
    model: '',
    color: '',
    gear: '',
    fuel_type: '',
    images: []
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {

    e.preventDefault();

    const validationErrors = validate(carData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      const formData = new FormData();
      // Append form fields
      formData.append('brand', carData.brand);
      formData.append('price', carData.price);
      formData.append('year', carData.year);
      formData.append('description', carData.description);
      formData.append('model', carData.model);
      formData.append('color', carData.color);
      formData.append('gear', carData.gear);
      formData.append('fuel_type', carData.fuel_type);
      // Append images
      carData.images.forEach((file, index) => {
        formData.append('images', file);
      });

      try {

        const backend_url = import.meta.env.VITE_BACK_END_API_URL;
        const data = await createCar(formData, backend_url); // Call createCar to send the request
        console.log('Car created successfully', data);
        setCarData({
          brand: '',
          price: '',
          year: '',
          description: '',
          model: '',
          color: '',
          gear: '',
          fuel_type: '',
          images: []
        });
        setErrors({});
      } catch (error) {
        setErrors({ file: error?.response?.data?.error || 'An unexpected error occurred' });
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear the error for the current field
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setCarData(prev => ({
      ...prev,
      images: files
    }));
  };

  const validate = (data) => {
    const errors = {};
    if (!data.brand) {
      errors.name = 'Car Brand is required';
    }
    if (!data.price || data.price <= 0) {
      errors.price = 'Price must be a positive number';
    }
    if (!data.year || data.year <= 0) {
      errors.year = 'Year must be a valid year';
    }
    if (!data.description) {
      errors.description = 'Description is required';
    }
    if (!data.model) {
      errors.model = 'Model is required';
    }
    if (!data.color) {
      errors.color = 'Color is required';
    }
    if (!data.gear) {
      errors.gear = 'Gear type is required';
    }
    if (!data.fuel_type) {
      errors.fuel_type = 'Fuel type is required';
    }
    if (data.images.length === 0) {
      errors.images = 'At least one image must be uploaded';
    }
    return errors;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-sm shadow-sm p-6 ">
      <h2 className="text-xl font-semibold mb-6 dark:text-white sm:">Add New Car</h2>
      <form className="space-y-6">
        <div className="flex flex-wrap space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Car Name
            </label>
            <input
              type="text"
              name="brand"
              value={carData.brand}
              onChange={handleChange}
              placeholder="Enter Brand"
              className={`w-full px-3 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              required
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={carData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className={`w-full px-3 py-3 border ${errors.price ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
              required
            />
            {errors.price && <p className="text-red-500 text-xs">{errors.price}</p>}
          </div>
        </div>

        <div className="flex flex-wrap space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Model
            </label>
            <input
              type="text"
              name="model"
              value={carData.model}
              onChange={handleChange}
              placeholder="Enter model"
              className={`w-full px-3 py-3 border ${errors.model ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            />
            {errors.model && <p className="text-red-500 text-xs">{errors.model}</p>}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Color
            </label>
            <input
              type="text"
              name="color"
              value={carData.color}
              onChange={handleChange}
              placeholder="Enter color"
              className={`w-full px-3 py-3 border ${errors.color ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            />
            {errors.color && <p className="text-red-500 text-xs">{errors.color}</p>}
          </div>
        </div>

        <div className="flex flex-wrap space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Gear Type
            </label>
            <input
              type="text"
              name="gear"
              value={carData.gear}
              onChange={handleChange}
              placeholder="Enter gear type"
              className={`w-full px-3 py-3 border ${errors.gear ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            />
            {errors.gear && <p className="text-red-500 text-xs">{errors.gear}</p>}
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Fuel Type
            </label>
            <input
              type="text"
              name="fuel_type"
              value={carData.fuel_type}
              onChange={handleChange}
              placeholder="Enter fuel type"
              className={`w-full px-3 py-3 border ${errors.fuel_type ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            />
            {errors.fuel_type && <p className="text-red-500 text-xs">{errors.fuel_type}</p>}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Year
          </label>
          <input
            type="number"
            name="year"
            value={carData.year}
            onChange={handleChange}
            placeholder="Enter year"
            className={`w-full px-3 py-3 border ${errors.year ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
          />
          {errors.year && <p className="text-red-500 text-xs">{errors.year}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={carData.description}
            onChange={handleChange}
            rows="4"
            placeholder="Enter description"
            className={`w-full px-3 py-3 border ${errors.description ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
            required
          ></textarea>
          {errors.description && <p className="text-red-500 text-xs">{errors.description}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Upload Images
          </label>
          <input
            type="file"
            onChange={handleImageChange}
            multiple
            className={`w-full px-3 py-3 border ${errors.images ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white`}
          />
          {errors.images && <p className="text-red-500 text-xs">{errors.images}</p> ||
            errors.file && <ErrorMessage message={errors.file} />
          }
        </div>


      </form>
      <div className='flex justify-end space-x-2 my-2 text-base'>
        <button
          onClick={handleSubmit}
          className="sm:w-[15%] w-[50%]   bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none"
        >
          Add Car
        </button>
        <button
          className="sm:w-[10%] w-1/2 bg-slate-100   text-gray-900 py-2 rounded-md hover:bg-gray-200 focus:outline-none"
          onClick={() => navigate('/admin/inventory/all')}
        >
          back
        </button>
      </div>
    </div>
  );
};

export default AddCar;
