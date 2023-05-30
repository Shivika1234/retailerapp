import React,{ useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  styles from './Viewinventry.css'
import axios from 'axios'

function Addinventory() {
  const [id, setId] = useState('');
  const [description, setDescription ] = useState('');
  const [color, setColor] = useState('');
  const [size, setSize ] = useState('');
  const [weight, setWeigth] = useState('');
  const [images, setImage] = useState('');
  const [mfgDate, setmfgDate] = useState('')
  const [expiryDate, setExpiryDate] = useState('');
  const [modelName, setModalName] = useState('');

  let data = {
    product_id : id,
    description : description,
    color : color,
    size : size,
    weight : weight,
    images : images,
    mfg_date : mfgDate,
    expiry_date : expiryDate,
    model_name : modelName
  }

   async function postProduct(e){
    e.preventDefault()
    try{
      console.log("How are you");
     await axios.post('http://localhost:4000/productdetails/api/retailer/productdetails', data, {
      headers:{
        "Content-Type":"application/json"
      }
    })
    console.log("how's everything going");
    console.log("data", data);
    }
    catch(error){
      console.log("error is", error);
    }
    console.log("how's everything going");
    console.log("data", data); 
  }

    return (
        <div style={{marginLeft:"12vw",width:"60vw",height:"36vw",backgroundColor:"",boxShadow:" 0 0 6px 4px rgba(0, 0, 0, 0.2)"}}>
        <h3 style={{textAlign:"center",fontWeight:"normal"}}> Add product information </h3>
        <Form style={{width:"55vw",margin:"auto",marginTop:"3vw"}} type="Submit">
      <Container>
      <Row>
      <Col>
      <Form.Group className="mb-3">
      <Form.Label>Product id</Form.Label>
      <Form.Control type="number" placeholder="Enter product id" value={id} onChange={(e)=> setId(e.target.value) } />
    
    </Form.Group>
      </Col>
      <Col>
      <Form.Group   className="mb-3">
      <Form.Label>Description</Form.Label>
      <Form.Control type="text" placeholder="Enter product description" value={description} onChange={(e)=> setDescription(e.target.value) } />
    </Form.Group>
      </Col>
      </Row>
     
     <Row>
     <Col>
     <Form.Group className="mb-3">
     <Form.Label >Color</Form.Label>
     <Form.Control type="text" placeholder="Enter color" value={color} onChange={(e)=> setColor(e.target.value) } />
   </Form.Group>
     </Col>

     <Col>
     <Form.Group className="mb-3">
     <Form.Label>Size</Form.Label>
     <Form.Control type="text" placeholder="Enter size" value={size} onChange={(e)=> setSize(e.target.value) } />
   </Form.Group>
     
     </Col>
     
     </Row>
      

      <Row>
      <Col>
      <Form.Group className="mb-3">
      <Form.Label>Weight</Form.Label>
      <Form.Control type="text" placeholder="Enter weight" value={weight} onChange={(e)=> setWeigth(e.target.value) } />
    </Form.Group>
      </Col>
      <Col>
      <Form.Group className="mb-3">
      <Form.Label>Image</Form.Label>
      <Form.Control type="text" placeholder="Enter image" value={images} onChange={(e)=> setImage(e.target.value) } />
    </Form.Group>
      </Col>
    </Row>

     <Row>
     <Col>
     <Form.Group className="mb-3">
     <Form.Label>Mfg date</Form.Label>
     <Form.Control type="number" placeholder="Enter mfg date" value={mfgDate} onChange={(e)=> setmfgDate(e.target.value) } />
     </Form.Group>
     </Col>
     <Col>
     <Form.Group className="mb-3" controlId="formBasicPassword">
     <Form.Label>Expiry date</Form.Label>
     <Form.Control type="number" placeholder="Enter expiry date" value={expiryDate} onChange={(e)=> setExpiryDate(e.target.value) } />
     </Form.Group>
     </Col>
     <Form.Group className="mb-3">
     <Form.Label>Modal name</Form.Label>
     <Form.Control type="text" placeholder="Enter modal name" value={modelName} onChange={(e)=> setModalName(e.target.value) } />
     </Form.Group>
     </Row>

   

        <Button style={{marginLeft:"22vw",marginTop:"1vw",width:"10vw"}} type='submit' variant="primary" onClick={postProduct}>
          Submit
        </Button>
        </Container>
      </Form> 
        </div>
    );
}

export default Addinventory;