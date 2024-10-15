import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AboutUs from './pages/AboutUs';
import Home from './pages/home';
import CarListing from './pages/CarListings';
import ContactUs from './components/ContactUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='Home' element={<Home />} />
          <Route path='AboutUs' element={<AboutUs />} />
          <Route path='CarListings' element={<CarListing/>} />
          <Route path='contact' element={<ContactUs/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
