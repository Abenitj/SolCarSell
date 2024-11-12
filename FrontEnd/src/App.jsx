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
import Dashboard from './AdminPanel/pages/Dashboard';
import AllCars from './AdminPanel/pages/inventory/AllCars';
import AddCar from './AdminPanel/pages/inventory/AddCar';
import Table from '../Template/Table';
import UpdateCar from './AdminPanel/pages/inventory/UpdateCar';
import Test from './AdminPanel/pages/test';
import RowDetail from './AdminPanel/pages/inventory/RowDetail';
import CarGallery from './AdminPanel/pages/inventory/CarGallery';
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
        <Route path='/table' element={<Table />} />
        <Route path='/test' element={<Test />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard/>} />
          
          <Route path='inventory'>
            <Route path='all' element={<AllCars/>} />
            <Route path='add' element={<AddCar/>} />
            <Route path='update' element={<UpdateCar/>}/>
            <Route path='row-detail' element={<RowDetail/>}/>
            <Route path='car-gallery' element={<CarGallery/>}/>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
