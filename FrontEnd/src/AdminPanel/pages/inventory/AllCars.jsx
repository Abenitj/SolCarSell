import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faFileExport } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const AllCars = () => {
  const [filterText, setFilterText] = useState('');
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));
  const navigate = useNavigate();
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDark(document.documentElement.classList.contains('dark'));
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  // Define light and dark mode styles
  const darkModeStyles = {
    head: {
      style: {
        position: 'sticky',
        top: 0, // Stick to the top
        backgroundColor: '#FFFFFF', // Background color for the header
        zIndex: 10, // Ensure the header is above other elements
      },
    },
    rows: {
      style: {
        backgroundColor: '#1F2937',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#374151',
        },
        minHeight: '60px',
      },
    },
    subHeader: {
      style: {
        backgroundColor: 'transparent',
      }
    },
    headRow: {
      style: {
        backgroundColor: '#374151',
        color: '#FFFFFF',
        borderBottomWidth: '1px',
        borderBottomColor: '#374151',
        minHeight: '52px',
      },
    },
    pagination: {
      style: {
        backgroundColor: '#1F2937',
        color: '#FFFFFF',
        borderTopWidth: '1px',
        borderTopColor: '#374151',
      },
      pageButtonsStyle: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        border: '1px solid #D1D5DB', // Light gray border
        borderRadius: '4px',
        padding: '6px 12px',
        margin: '2px',
        '&:hover': {
          backgroundColor: '#E5E7EB', // Light gray on hover
        },
        '&:disabled': {
          backgroundColor: '#E5E7EB', // Light gray for disabled
          color: '#9CA3AF',
        },
      },
    },
  };

  const lightModeStyles = {
    head: {
      style: {
        position: 'sticky',
        top: 0, // Stick to the top
        backgroundColor: '#FFFFFF', // Background color for the header
        zIndex: 10, // Ensure the header is above other elements
      },
    },
    rows: {
      style: {
        backgroundColor: '#FFFFFF',
        color: '#111827',
        '&:hover': {
          backgroundColor: '#F3F4F6',
        },
        minHeight: '60px',
      },
    },
    subHeader: {
      style: {
        backgroundColor: 'transparent',
      }
    },
    headRow: {
      style: {
        backgroundColor: '#F3F4F6',
        color: '#111827',
        borderBottomWidth: '1px',
        borderBottomColor: '#E5E7EB',
        minHeight: '52px',
      },
    },
    pagination: {
      style: {
        backgroundColor: '#FFFFFF',
        color: '#111827',
        borderTopWidth: '1px',
        borderTopColor: '#E5E7EB',
      },
      pageButtonsStyle: {
        backgroundColor: '#FFFFFF',
        color: '#000000',
        border: '1px solid #D1D5DB', // Light gray border
        borderRadius: '4px',
        padding: '6px 12px',
        margin: '2px',
        '&:hover': {
          backgroundColor: '#E5E7EB', // Light gray on hover
        },
        '&:disabled': {
          backgroundColor: '#F9FAFB', // Very light gray for disabled
          color: '#9CA3AF',
        },
      },
    },
  };


  // Combine styles based on current theme
  const customStyles = isDark ? darkModeStyles : lightModeStyles;

  const cars = [
    {
      brand: "aa",
      year:200,
      model: "rolla 2004",
      price: 1.00,
      status: "Available",
      color: "blue",
      gear: "Manual",
      fuel_type: "Benzine",
      description: "A reliable and fuel-efficient sedan with a manual transmission. A reliable and fuel-efficient sedan with a manual transmission. A reliable and fuel-efficient sedan with a manual transmission. A reliable and fuel-efficient sedan with a manual transmission. A reliable and fuel-efficient sedan with a manual transmission. A reliable and fuel-efficient sedan with a manual transmission.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2006",
      price: 1.20,
      status: "Available",
      color: "red",
      gear: "Automatic",
      fuel_type: "Benzine",
      description: "A compact car perfect for city driving, equipped with an automatic transmission.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2008",
      price: 1.50,
      status: "Available",
      color: "green",
      gear: "Manual",
      fuel_type: "Diesel",
      description: "Durable and efficient, ideal for long trips with a manual gearbox.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2010",
      price: 2.00,
      status: "Not Available",
      color: "black",
      gear: "Automatic",
      fuel_type: "Benzine",
      description: "Stylish sedan with modern features and a smooth automatic transmission.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2012",
      price: 2.50,
      status: "Available",
      color: "white",
      gear: "Manual",
      fuel_type: "Hybrid",
      description: "A hybrid model offering great fuel efficiency and eco-friendly driving.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2014",
      price: 3.00,
      status: "Available",
      color: "silver",
      gear: "Manual",
      fuel_type: "Diesel",
      description: "A reliable diesel sedan, known for its low fuel consumption and high durability.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2016",
      price: 3.50,
      status: "Available",
      color: "blue",
      gear: "Automatic",
      fuel_type: "Benzine",
      description: "A modern sedan with advanced features and a fuel-efficient engine.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2018",
      price: 4.00,
      status: "Not Available",
      color: "gray",
      gear: "Manual",
      fuel_type: "Diesel",
      description: "Perfect for long-distance travel with a reliable diesel engine and manual transmission.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2020",
      price: 4.50,
      status: "Available",
      color: "maroon",
      gear: "Automatic",
      fuel_type: "Hybrid",
      description: "A hybrid sedan with the latest technology for an eco-friendly ride.",
    },
    {
      brand: "aa",
      year:200,
      model: "rolla 2022",
      price: 5.00,
      status: "Available",
      color: "navy",
      gear: "Manual",
      fuel_type: "Electric",
      description: "A fully electric model, ideal for those seeking zero emissions and high efficiency.",
    },
  ];

  const columns = [
    {
      name: 'Brand',
      selector: (row) => row.brand,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => row.price,
      sortable: true,
      format: (row) => `$${row.price.toLocaleString()}`,
    },
    {
      name: 'Status',
      selector: (row) => row.status,
      sortable: true,
      cell: (row) => (
        <span
          className={`px-2  py-1 text-sm font-medium rounded-full ${row.status === 'Available'
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
            }`}
        >
          {row.status}
        </span>
      ),
    },
    {
      name: 'Model',
      selector: (row) => row.model,
      sortable: true,
    },
    {
      name: 'Color',
      selector: (row) => row.color,
      sortable: true,
    },
    {
      name: 'Year',
      selector: (row) => row.year,
      sortable: true,
    },
    {
      name: 'Description',
      selector: (row) => row.description.length > 60 ? row.description.slice(0, 60) + '...' : row.description,
      sortable: true,
    },
    {
      name: 'Fuel Type',
      selector: (row) => row.fuel_type,
      sortable: true,
    },
    {
      name: 'Gear',
      selector: (row) => row.gear,
      sortable: true,
    },
    {
      name: 'Actions',
      cell: (row) => (
        <div className="flex gap-3">

          <button
            className="p-2 text-green-600 hover:bg-blue-50 dark:text-green-400 dark:hover:bg-blue-900/50 rounded-md transition-colors duration-200"
            onClick={() => handleRowDetail(row)}
            aria-label="Edit"
          >
            <FontAwesomeIcon  icon={faEye}
              aria-label="eye" // Optional: Adds a pointer cursor on hover
            />
          </button>
          <button
            className="p-2 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/50 rounded-md transition-colors duration-200"
            onClick={() => handleEdit(row)}
            aria-label="Edit"
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button
            className="p-2 text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50 rounded-md transition-colors duration-200"
            onClick={() => handleDelete(row)}
            aria-label="Delete"
          >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (val) => {
    navigate("/admin/inventory/update", { state: { existingCarData: val } });
  };
  const handleRowDetail = (row) => {
    // use useNavigate hook to route as well as to send data 
    navigate("/admin/inventory/row-detail", { state: { data: row } })
  };
  const filteredItems = cars.filter((item) => {
    const searchText = filterText.trim().toLowerCase();
    return (
      item.name?.toLowerCase().includes(searchText) ||
      item.model?.toLowerCase().includes(searchText) ||
      item.status?.toLowerCase().includes(searchText) ||
      item.gear?.toLowerCase().includes(searchText) ||
      item.color?.toLowerCase().includes(searchText)
    );
  });

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredItems);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Cars');

    XLSX.writeFile(workbook, 'CarsInventory.xlsx');
  };

  const subHeaderComponent = (
    <div className="w-full mb-4 flex justify-between">
      <input
        type="text"
        placeholder="Search..."
        className="w-64 px-4 py-2 border rounded-sm bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none "
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      <div className='flex space-x-4'>
        <Link
          to="/admin/inventory/add"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors duration-200 font-medium"
        >
          Add New Car
        </Link>
        <button
          onClick={exportToExcel}
          className="flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md shadow-sm transition-colors duration-200 font-medium"
        >
          <FontAwesomeIcon icon={faFileExport} />
          Export to Excel
        </button>
      </div>
    </div>
  );

  return (
    <div className="bg-primary dark:bg-gray-800 rounded-lg shadow-md">
      <div className="p-6 dark:bg-gray-800 bg-primary">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Inventory Management</h2>

        </div>
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          responsive
          subHeader
          paginationPerPage={5}
          paginationRowsPerPageOptions={[5, 10, 25, 50]}
          subHeaderComponent={subHeaderComponent}
          customStyles={customStyles}
          noDataComponent={<div className='dark:bg-gray-800  w-full text-center text-white p-3'>There are no records to display</div>}
        />
      </div>
    </div>
  );
};

export default AllCars;
