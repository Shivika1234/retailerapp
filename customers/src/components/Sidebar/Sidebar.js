import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
// import {UnorderedListOutlined} from '@ant-design/icons' 
import './Sidebar.css'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Button style={{marginRight:"4vw",color:"black",backgroundColor:" rgba(0,0,0,0.1)",border:"1px solid grey",marginTop:"1vw"}} variant="primary" onClick={handleShow}>
    View more
      </Button>

      <Offcanvas style={{width:"18vw"}} show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <h5> Shop by category </h5>
         <ul>
         <li> Mobiles, Computer </li>
         <li> TV, Appliances</li>
         <li> <NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/womenfashion">Women's Fashion</NavLink> </li>
         <li> Men's Fashion </li>
         <li> Home,Kitchen </li>
         <li> Sports,Fitness</li>
         <li> Toys, Baby Products</li>
         <li> Books </li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
      </>
  )
}
