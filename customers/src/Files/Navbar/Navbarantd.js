import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbarantd() {
    return (


        <Navbar style={{justifyContent:"evenly",boxShadow:" 0 5px 10px rgba(0,0,0,0.1)",height:"5vw"}}  expand="lg">
      <Container style={{justifyContent:"evenly"}}>
     
        <Navbar.Brand style={{fontFamily:"fantasy",color:"#bfbfbf",fontSize:"2vw"}} href="#home">Shopper's Point</Navbar.Brand>
       
        <input type="text" style={{border:"1px solid #bfbfbf",borderRadius:"5px",height:"2.2rem",width:"22vw"}}/>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">

          <Nav style={{marginLeft:"40vw"}} className="me-auto">
          
          <NavDropdown title="Login" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">
            Another action
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
         
        </NavDropdown> 
          
          <Nav.Link style={{width:"10vw"}} href="#home">Become a seller</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Navbarantd;