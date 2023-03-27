import './App.css';
import Sidebar from './Files/Sidebar';
import Navbar from './Files/Navbar';
import Dashboard from './components/Dashboard';
import {Routes,Route} from 'react-router-dom'
import User from './components/User/User';
import Role from './components/Roles/Role';
import Category from './components/Category/Category';
import Subcategory from './components/Subcategory/Subcategory';
import Retailer from './components/Retailer/Retailer';
import Customer from './components/Customer/Customer';

function App() {
  return (
<>
    <Navbar/>
    <div style={{display:"flex"}}>
     <Sidebar/> 

     <Routes>
     <Route path="/dashboard" element={<Dashboard/>}/>
     <Route path="/user" element={<User/>}/>
     <Route path="/role" element={<Role/>}/>
     <Route path="/category" element={<Category/>}/>
     <Route path="/subcategory" element={<Subcategory/>}/>
     <Route path='/retailer' element={<Retailer/>}/>
     <Route path='/customer' element={<Customer/>}/>
     </Routes>
     </div>
     </>
  );
}

export default App;
