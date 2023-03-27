import React from 'react';
import styles from './Navbar.css'
// import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
           <header>
           <a href="a" className='logo'> LOGO </a>
     <input type="checkbox" id="menu-bar"/>
     <label for="menu-bar"> Menu </label>
    
           <nav className='navbar'>
           <ul>
           
           <li>   <a href='#'> Become a seller </a></li>
           <li>   <a href='#'> Login </a></li>
           <li>   <a href='#'> Become a seller </a></li>
           <li>   <a href='#'> Become a seller </a></li>
  
           </ul>
           
           </nav>
           </header> 
        </div>
    );
}

export default Navbar;