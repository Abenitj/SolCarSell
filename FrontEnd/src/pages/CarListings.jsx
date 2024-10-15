import React, { useState, useEffect } from "react";
// Adjust the import path as necessary
import ImageGallery from "../components/imageGallery"; // Corrected import spelling
import carData from "../assets/carData";
import FilterSortCar from "../components/filterSortCar";
const CarListing = () => {
  const [filterData, setFilterData] = useState(carData); // Initialize with all car data
  const [filterSearch, setFilterSearch] = useState(""); // Initial state for search term

  const handleFilterSort = (searchTerm, sortOption) => {
    setFilterSearch(searchTerm);
    applyFilterAndSort(searchTerm, sortOption);
  };

  const applyFilterAndSort = (searchTerm, sortOption) => {
    let filteredData = carData.filter((item) => {
      return (
        item.carDetails.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.carDetails.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.carDetails.color.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.carDetails.gear.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.carDetails.fuel.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    
    // Apply sorting based on the selected sort option
    if (sortOption === "asc") {
      filteredData.sort((a, b) => a.carDetails.brand.localeCompare(b.carDetails.brand));
    } else if (sortOption === "desc") {
      filteredData.sort((a, b) => b.carDetails.brand.localeCompare(a.carDetails.brand));
    } else if (sortOption === "price-asc") {
      filteredData.sort((a, b) => a.carDetails.price - b.carDetails.price);
    } else if (sortOption === "price-desc") {
      filteredData.sort((a, b) => <FormattedPrice price={b.carDetails.price}/> - <FormattedPrice price={a.carDetails.price}/>);
    }

    setFilterData(filteredData);
  };

  useEffect(() => {
    // Initial filtering and sorting when component mounts
    applyFilterAndSort(filterSearch, ""); // You can set the default sort option here
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="p-4">
      <FilterSortCar onFilterSort={handleFilterSort} />
      {filterData.map((car, index) => (
        <div key={index}>
          <ImageGallery carData={car} />
        </div>
      ))}
    </div>
  );
};

export default CarListing;
