import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import Home from './pages/home';
import CarListing from './pages/CarListings';
import ContactUs from './components/ContactUs';
import Header from './components/header';
import ScrollToTop from './components/ScrollToTop';
import AdminLayout from './AdminPanel/AdminLayout';
import AdminRoutes from './AdminPanel/routes/AdminRoutes';
import Dashboard from './AdminPanel/pages/Dashboard';
import AddCar from './AdminPanel/pages/inventory/AddCar';
import AllCars from './AdminPanel/pages/inventory/AllCars';
import Settings from './AdminPanel/pages/Settings';

// In your main routing setup:


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<AboutUs />} />
          <Route path='CarListings' element={<CarListing />} />
          <Route path='contact' element={<ContactUs />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to={<Dashboard/>} replace />}/>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="inventory">
          <Route path="all" element={<AllCars />} />
          <Route path="add" element={<AddCar />} />
        </Route>
        <Route path="settings" element={<Settings />} />
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
