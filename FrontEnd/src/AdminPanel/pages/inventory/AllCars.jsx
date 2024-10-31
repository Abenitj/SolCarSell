import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DataTable from 'react-data-table-component';

const AllCars = () => {
  const [filterText, setFilterText] = useState('');
  const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

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

  const customStyles = {
    table: {
      style: {
        backgroundColor: isDark ? '#red' : 'red',
        color: isDark ? '#FFFFFF' : '#111827',
      },
    },
    rows: {
      style: {
        backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#111827',
        '&:hover': {
          backgroundColor: isDark ? '#374151' : '#F3F4F6',
        },
        minHeight: '60px',
      },
    },
    headRow: {
      style: {
        backgroundColor: isDark ? '#111827' : '#F3F4F6',
        color: isDark ? '#FFFFFF' : '#111827',
        borderBottomWidth: '1px',
        borderBottomColor: isDark ? '#374151' : '#E5E7EB',
        minHeight: '52px',
      },
    },
    headCells: {
      style: {
        fontSize: '14px',
        fontWeight: '600',
        padding: '16px',
      },
    },
    cells: {
      style: {
        padding: '16px',
      },
    },
    pagination: {
      style: {
        backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
        color: isDark ? '#FFFFFF' : '#111827',
        borderTopWidth: '1px',
        borderTopColor: isDark ? '#374151' : '#E5E7EB',
      },
      pageButtonsStyle: {
        color: isDark ? '#FFFFFF' : '#111827',
        fill: isDark ? '#FFFFFF' : '#111827',
      },
    },
  };

  const cars = [
    { id: 1, name: 'Toyota Camry', price: 25000, status: 'Available' },
    { id: 2, name: 'Honda Civic', price: 22000, status: 'Sold' },
    { id: 3, name: 'Tesla Model 3', price: 45000, status: 'Available' },
  ];

  const columns = [
    {
      name: 'Name',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
      format: row => `$${row.price.toLocaleString()}`,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      cell: row => (
        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
          row.status === 'Available'
            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
        }`}>
          {row.status}
        </span>
      ),
    },
    {
      name: 'Actions',
      cell: row => (
        <div className="flex gap-3">
          <button
            className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/50 rounded-md transition-colors duration-200"
            onClick={() => handleEdit(row.id)}
          >
            Edit
          </button>
          <button
            className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-red-900/50 rounded-md transition-colors duration-200"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const handleEdit = (id) => {
    console.log('Edit car with id:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete car with id:', id);
  };

  const filteredItems = cars.filter(
    item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
  );

  const subHeaderComponent = (
    <div className="w-full mb-4 bg-red-500">
      <input
        type="text"
        placeholder="Search by name..."
        className="w-64 px-4 py-2 border rounded-lg bg-red-700 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-600"
        value={filterText}
        onChange={e => setFilterText(e.target.value)}
      />
    </div>
  );

  return (
    <div className="bg-red-800 dark:bg-gray-800 rounded-lg shadow-md">
      <div className="p-6 bg-slate-500">
        <div className="flex bg-red-600 justify-between items-center mb-6">
          <h2 className="text-2xl bg-slate-600 font-semibold text-gray-900 dark:text-white">All Cars</h2>
          <Link
            to="/admin/inventory/add"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            Add New Car
          </Link>
        </div>
        <DataTable
          columns={columns}
          data={filteredItems}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30, 50]}
          subHeader
          subHeaderComponent={subHeaderComponent}
          persistTableHead
          highlightOnHover
          pointerOnHover
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default AllCars;
