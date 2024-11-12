import React from 'react';

const CarList = ({ cars }) => {
    return (
        <div className="car-list">
            {cars.map(car => (
                <div key={car._id} className="car-item bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
                    <h2 className="text-xl font-bold">{car.brand} {car.model}</h2>
                    <p className="text-gray-600">Color: {car.color}</p>
                    <p className="text-gray-600">Gear: {car.gear}</p>
                    <p className="text-gray-600">Fuel Type: {car.fuel_type}</p>
                    <p className="text-gray-600">Price: ${car.price}</p>
                    <p className="text-gray-800 mt-2">{car.description}</p>
                    
                    <div className="car-images mt-4">
                        <h3 className="text-lg font-semibold">Images:</h3>
                        <div className="image-gallery grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
                            {car.images.map((imageUrl, index) => (
                                <img 
                                    key={index} 
                                    src={imageUrl} 
                                    alt={`Car ${car.model} ${index + 1}`} 
                                    className="w-full h-auto rounded-md shadow-sm"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CarList;
