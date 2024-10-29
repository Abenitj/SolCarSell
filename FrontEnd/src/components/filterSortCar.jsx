import React, { useState } from "react";

const FilterSortCar = ({ onFilterSort }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); // State for sorting option

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onFilterSort(value, sortOption); // Pass sortOption to onFilterSort
  };

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    onFilterSort(searchTerm, value); // Pass searchTerm to onFilterSort
  };

  return (
    <div className="mb-4 ">
      <h2 className="text-lg font-bold mb-2 dark:text-white">Filter and Sort Cars</h2>
      <div className="flex flex-col md:flex-row md:space-x-4 mb-4 border-[1px] pb-7 border-gray-400 p-2">
        {" "}
        {/* Use flex-col for mobile, flex-row for tablet and up */}
        {/* Search Filter */}
        <div className="flex-1 mb-2 md:mb-0">
          {" "}
          {/* Adjust margin for mobile */}
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Search
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by model, brand, gear, fuel, color..."
            className="bg-slate-100 dark:bg-gray-800 border-b-[2px] border-b-gray-300 text-gray-800 dark:text-primary text-sm block w-full p-4 focus:outline-none" // Removed focus ring styles
          />
        </div>
        {/* Sort Options */}
        <div className="flex-1">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Sort By
          </label>
          <select
            value={sortOption}
            onChange={handleSortChange}
             className="bg-slate-100 dark:bg-gray-800 border-b-[2px] border-b-gray-300 text-gray-800 dark:text-primary text-sm block w-full p-4 focus:outline-none"
          >
            <option value="">Select Sort Option</option>
            <option value="asc">Alphabetically (A-Z)</option>
            <option value="desc">Alphabetically (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSortCar;
