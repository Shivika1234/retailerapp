import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useFormik } from 'formik'
import { signUpSchema } from '../Schema/index'

const initialValues = {
  id: " ",
  name: " ",
  password: " "
}


export default function Signup() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      }
  })



let data = {
    id : values.id,
    password : values.password
    }


async function submitDetails(){
  let result =  await axios.post("http://localhost:4000/retailerregistration/api/retailer/registerretailer", data,  {
        headers: {
          "Content-Type": "application/json"
        }
      })
      console.log("data", data);
    // const person = { Name: usernameReg, Password: passwordReg};
    // localStorage.setItem('user', JSON.stringify(result));
    // Navigate('/')
    // console.log("person", person);
  }

  
  return (
    <div className='' style={{height:"94vh",width:"98vw",backgroundColor:"pink",marginLeft:"1vw",marginTop:"1vw"}}>
      
    <div style={{backgroundColor:"white",height:"75vh",width:"40vw",marginLeft:"29vw",marginTop:"3vw",position:"absolute"}}>
   <h2 style={{marginLeft:"18vw"}}> Sign up </h2>
   <Form type = "submit" style={{width:"30vw",marginLeft:"6vw",marginTop:"6vw"}}>
    <Form.Group className="mb-3">
      <Form.Label>Id</Form.Label>
      <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.id} type="email" id='id' name='id' placeholder="Enter id" />
 {errors.id && touched.id ? (<p> {errors.id} </p>) : null}
     </Form.Group>


    <Form.Group className="mb-3">
      <Form.Label>Password</Form.Label>
      <Form.Control onChange={handleChange} onBlur={handleBlur} value={values.password} type="password" id='password' name='password' placeholder="Enter password" />
     {errors.password && touched.password ? (<p> {errors.password} </p>) : null}
    </Form.Group>
    <div>
    <Button className='signupButton' variant="primary" type="submit" onClick={submitDetails}>Sign up</Button>
    </div>
    
  
   </Form>
    </div>
    
    </div>
  )
}
