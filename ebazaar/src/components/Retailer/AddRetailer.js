import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function AddRetailer() {
    return (
       <>
       
        <div style={{marginLeft:"12vw",width:"60vw",height:"36vw",backgroundColor:"#b3e6ff",boxShadow:" 0 0 6px 4px rgba(0, 0, 0, 0.2)"}}>
        <h3 style={{textAlign:"center",fontWeight:"normal"}}> Retailer Registration Form </h3>
        <Form style={{width:"55vw",margin:"auto",marginTop:"3vw"}}>

        <Container>
      
     
      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Shop id</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    
    </Form.Group>
      </Col>
      <Col>
      <Form.Group  className="mb-3" controlId="formBasicPassword">
      <Form.Label>Shop name</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
      </Col>
      </Row>
     

 
     
     <Row>
     <Col>
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Contact no.</Form.Label>
     <Form.Control type="password" placeholder="Password" />
   </Form.Group>
     </Col>

     <Col>
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Address</Form.Label>
     <Form.Control type="password" placeholder="Password" />
   </Form.Group>
     
     </Col>
     
     </Row>
      

      <Row>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>City</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>State</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
      </Col>
    </Row>

     <Row>
     <Col>
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Registration no.</Form.Label>
     <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     </Col>
     <Col>
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>GST no.</Form.Label>
     <Form.Control type="password" placeholder="Password" />
     </Form.Group>
     </Col>
     
     </Row>

   

        <Button style={{marginLeft:"22vw",marginTop:"1vw",width:"10vw"}} variant="primary" type="submit">
          Submit
        </Button>
        </Container>
      </Form> 
        </div>
        </>
    );
}

export default AddRetailer;