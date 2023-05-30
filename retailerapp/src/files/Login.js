import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Styles from './Loginpage.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import im from '../images/bg.jpg'
import Styles from './Login.css'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';
import { Link } from 'react-router-dom';

export function Login() {
  const [name, setName] = useState([])
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value })
  }

  async function submitDetails(e) {
    e.preventDefault()
    const config = {
      "Content-Type": "application/json"
    }
    let result = await axios.post(`http://localhost:4000/retailerregistration/api/retailer/login`, userInfo, config)
    console.log("hello", result.data.data);
    if(result.status === 200){
      localStorage.setItem("token", JSON.stringify(result.data.data))
      localStorage.setItem("user", JSON.stringify(result.data.result))
      }
     navigate('/dashboard')
   }
  
  

  return (
    <>
      <div className='image' style={{height: "94vh", width: "98vw", backgroundColor: "gray", marginLeft: "1vw", marginTop: "1vw"  }}>

        <div style={{ backgroundColor: "white", height: "75vh", width: "40vw", marginLeft: "29vw", marginTop: "3vw", position: "absolute" }}>
          <h2 style={{ marginLeft: "18vw" }}> Login</h2>
          <Form style={{ width: "30vw", marginLeft: "6vw", marginTop: "6vw" }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleChange} placeholder="Enter email" />


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">

            </Form.Group>
            <div>
              <Button className='loginButton' variant="primary" type="submit" onClick={submitDetails}>Log In</Button>
              <p style={{ marginLeft: "10vw" }}>Not a user? <span style={{ color: "blue" }}> <Link to='/signup'> Sign up  </Link> </span> </p>
          <p>  {name} </p> 
              </div>

          </Form>
        </div>

      </div>


    </>
  );
}


export default Login;
