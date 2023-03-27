import React from 'react';
import './WomenFashion.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function WomenFashion() {
    return (
      <>
      <div style={{display:"flex"}}>
     <div style={{backgroundColor:"pink",display:"inline-block",height:"41vw"}}>
     <ul className='titlewomen'>
     <h5> Women </h5>
     <li> Clothing </li>
     <li> Shoes</li>
     <li> Handbags</li>
     <li> Jwellery </li>
     <li> Watches </li>

     <h6 className='titleprice'> Price  </h6>
     <li> Under  ₹ 1,000 </li> 
     <li> ₹1,000 - ₹5,000 </li>
     <li> ₹5,000 - ₹10,000 </li>
     <li> ₹10,000 - ₹20,000 </li>
     <li> Over ₹20,000 </li>

     
     </ul>
     </div>

<div>  

<Container style={{marginTop:"2vw"}}>
<Row>
  <Col sm>sm=true</Col>
  <Col sm>sm=true</Col>
  <Col sm>sm=true</Col>
  <Col sm>sm=true</Col>
  <Col sm>sm=true</Col>
  <Col sm>sm=true</Col>
</Row>
</Container>

</div>

     </div>
      </>
    );
}

export default WomenFashion;