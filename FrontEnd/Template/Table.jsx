import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';

const Table = () => {
  const handleBuy = (row) => {
    console.log(row);
  };

  const products = [
    { id: 1, name: 'Laptop', price: 1200, stock: 15 },
    { id: 2, name: 'Headphones', price: 100, stock: 50 },
    { id: 3, name: 'Smartphone', price: 800, stock: 25 },
    { id: 4, name: 'Monitor', price: 300, stock: 0 },
    { id: 5, name: 'Keyboard', price: 50, stock: 100 },
  ];

  const [filterText, setFilterText] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const columns = [
    {
      name: 'Product Name',
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => `$${row.price.toFixed(2)}`,
      sortable: true,
    },
    {
      name: 'Stock',
      selector: (row) => row.stock,
      sortable: true,
      cell: (row) => (
        <span style={{ color: row.stock > 20 ? 'green' : 'red' }}>
          {row.stock} units
        </span>
      ),
    },
    {
      name: 'Action',
      cell: (row) => (
        <button
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '0px 4px',
          }}
          onClick={() => handleBuy(row)}
        >
          Buy
        </button>
      ),
    },
  ];

  const customStyles = {
    header: {
      style: {
        backgroundColor: 'red',
        color: '#ffffff',
        fontWeight: 'bold',
      },
    },
    rows: {
      style: {
        '&:nth-of-type(odd)': {
          backgroundColor: '#f9fafb',
        },
      },
    },
  };

  const csvData = filteredProducts.map((product) => ({
    ID: product.id,
    Name: product.name,
    Price: `$${product.price.toFixed(2)}`,
    Stock: `${product.stock} units`,
  }));
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(filteredProducts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Products');
    XLSX.writeFile(workbook, 'Products.xlsx');
  };

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const SubHeaderComponent = (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%' }}>
      <input
        type="text"
        placeholder="Search by product name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          width: '200px',
        }}
      />
      <div style={{ position: 'relative' }}>
        <button
          onClick={toggleDropdown}
          style={{
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Export
        </button>
        {dropdownOpen && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              zIndex: 1,
              width: '150px',
            }}
          >
            <button
              onClick={exportToExcel}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                color: '#3b82f6',
                padding: '10px',
                textAlign: 'left',
                width: '100%',
                cursor: 'pointer',
              }}
            >
              Export to Excel
            </button>
            <CSVLink
              data={csvData}
              filename="products.csv"
              style={{
                display: 'block',
                padding: '10px',
                color: '#10b981',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              Export to CSV
            </CSVLink>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <DataTable
        title="Inventory Management"
        columns={columns}
        data={filteredProducts}
        pagination
        customStyles={customStyles}
        subHeader
        subHeaderComponent={SubHeaderComponent}
        noDataComponent="No data available"
      />
    </div>
  );
};
export default Table;
