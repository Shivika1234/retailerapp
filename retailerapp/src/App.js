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

function App() {
  return (
   <>
    <NavbarRetailer/>
    <div style={{display:"flex"}}>
 
    <SidebarRetailer/>  
 	
   <Routes>
   <Route path="/dashboard" element={<Dashboard/>} />
   <Route path="/banking" element={<Banking/>} />
   <Route path="/bookingdetails" element={<BookingDetails/>} />
   <Route path="/product" element={<Product/>} />

   </Routes>
    </div>
    </>
  );
}

export default App;