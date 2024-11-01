import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminLayout from '../AdminLayout';
import Dashboard from '../pages/Dashboard';
import AllCars from '../pages/inventory/AllCars';
import AddCar from '../pages/inventory/AddCar';
import Settings from '../pages/Settings';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="inventory">
          <Route path="all" element={<AllCars />} />
          <Route path="add" element={<AddCar />} />
        </Route>
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
