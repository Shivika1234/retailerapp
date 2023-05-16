import React from 'react';
import './App.css';
import Banking from './components/Banking/Banking'
import { Routes,Route } from 'react-router-dom'
import BookingDetails from './components/BookingDetails/BookingDetails'
import Dashboard from './components/Dashboard/Dashboard'
import Product from './components/Product/Product'
import SidebarRetailer from './files/SidebarRetailer';
import Navbar from './files/NavbarRetailer'
import NavbarRetailer from './files/NavbarRetailer';
import Login from './files/Login';
import Signup from './files/Signup';

function App() {
  return (
   <>
   
 	
   <Routes>
   <Route path="/dashboard" element={<Dashboard/>} />
   <Route path="/banking" element={<Banking/>} />
   <Route path="/bookingdetails" element={<BookingDetails/>} />
   <Route path="/product" element={<Product/>} />
   <Route path="/" element={<Login/>} />
   <Route path="/signup" element={<Signup/>} />

   </Routes>
   
    </>
  );
}

export default App;