import React, { useState, useRef } from 'react'
import axios from 'axios'
import { useFormik } from 'formik'
import { retailerRegistrationSchema } from '../Schema/index'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Styles from './Login.css'
import { useNavigate } from 'react-router-dom'

const initialValues = {
  retailer_id : '',
  shop_name: '',
  password : '',
  ownername : '',
  registration_no : '',
  registration_doc : '',
  profile_photo : '',
  gst_no : '',
  pan_no : '',
  address : '',
  state : '',
  city: '',
  pincode : '',
  contact_no : '',
  email : ''
}

  export default function Signup() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: retailerRegistrationSchema,
    onSubmit: (values) => {
      }
      
  })
  const fileref = useRef(null);
  const[id, setId] = useState('')
  const[pwd, setPwd] = useState('')

  const navigate = useNavigate()

  const data = {
    retailer_id : values.retailer_id,
    shop_name: values.shop_name,
    password : values.password,
    ownername : values.ownername,
    registration_no : values.registration_no ,
    registration_doc : values.registration_doc,
    profile_photo : values.profile_photo ,
    gst_no :  values.gst_no,
    pan_no : values.pan_no,
    address : values.address,
    state : values.state,
    city: values.city ,
    pincode : values.pincode,
    contact_no : values.contact_no,
    email : values.email
  }

  async function postRetailer(e){
    e.preventDefault()
    console.log("How are you");
    const postResult = await axios.post('http://localhost:4000/retailerregistration/api/retailer/registerretailer', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
    console.log("postResult", postResult );
    const retailerData = [data.retailer_id, data.password]
    console.log("data", retailerData);
    localStorage.setItem('user', JSON.stringify(data.retailer_id))
    navigate('/')
  }
  return (
    <div className='image'>
    <Container className='signUpContainer' >
    <h3 style={{marginLeft:"18vw", marginTop:"2vw"}}> Sign up Page </h3>
    <Row>
      <Col> 
   <form style={{marginTop:"3vw"}} type='submit' onSubmit={handleSubmit}>
    <Container style={{width:"45vw"}} >
    <Row>
      <Form.Group className="mb-3">
      <Form.Label>Retailer id</Form.Label>
      <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.retailer_id} type="text" id='retailer_id' name='retailer_id' placeholder="Enter retailer_id" />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Shop name</Form.Label>
      <Form.Control onChange={handleChange} onBlur={handleBlur}  type="text" fileRef={fileref} id='shop_name' name='shop_name' placeholder="Enter shop_name" />
    </Form.Group>
     
    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" id='password' name='password' placeholder="Enter password" />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label> Owner name </Form.Label>
      <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.ownername} type="text" id='ownername' name='ownername' placeholder="Enter ownername" />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Registration no.</Form.Label>
      <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.registration_no} type="text" id='registration_no' name='registration_no' placeholder="Enter registration_no" />
    </Form.Group>
    
    <Form.Group className="mb-3">
    <Form.Label>Registration doc</Form.Label>
    <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.registration_doc} type="text" id='registration_doc' name='registration_doc' placeholder="Enter registration_doc" />
  </Form.Group>

  <Form.Group className="mb-3">
  <Form.Label>Profile photo</Form.Label>
  <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.profile_photo} type="text" id='profile_photo' name='profile_photo' placeholder="Enter profile_photo" />
</Form.Group>


<Form.Group className="mb-3">
<Form.Label>GST no.</Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.gst_no} type="text" id='gst_no' name='gst_no' placeholder="Enter gst_no" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label> PAN no.</Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.pan_no} type="text" id='pan_no' name='pan_no' placeholder="Enter pan_no" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label> Address </Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.address} type="text" id='address' name='address' placeholder="Enter address" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label> State </Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.state} type="text" id='state' name='state' placeholder="Enter state" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label> City </Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.city} type="text" id='city' name='city' placeholder="Enter city" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label> Pin code</Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.pincode} type="text" id='pincode' name='pincode' placeholder="Enter pincode" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label> Contact no.</Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.contact_no} type="text" id='contact_no' name='contact_no' placeholder="Enter contact_no" />
</Form.Group>

<Form.Group className="mb-3">
<Form.Label> Email </Form.Label>
<Form.Control onChange={handleChange} onBlur={handleBlur} value={values.email} type="text" id='email' name='email' placeholder="Enter email" />
</Form.Group>

<Button  onClick={postRetailer} onSubmit={handleSubmit}> Submit </Button>
    </Row>
    </Container>
      </form>
      </Col>
      </Row>
  </Container>
   
    </div>
  )
}
