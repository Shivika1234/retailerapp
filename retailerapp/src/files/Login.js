import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Styles from './Loginpage.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import axios from 'axios';
import { Link } from 'react-router-dom';

export function Login() {

const [usernameReg, setUernameReg] = useState('');
const [passwordReg, setPasswordReg] = useState ('');
const [loginStatus, setLoginStatus] = useState("");
const [role, setRole] = useState("")
axios.defaults.withCredentials = true;
console.log("usernameReg",usernameReg);


const userLoginDetails = {
  id: usernameReg,
  password: passwordReg,
}
  
function submitDetails(){
  const person = { Name: usernameReg, Password: passwordReg};
  localStorage.setItem('user', JSON.stringify(person));
  console.log("person", person);
}

  
//     async function login() {
//     let result = await axios.post('http://localhost:4000/user/api/admin/registeruser', userLoginDetails, {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }).then((response) => {
//       if (!response.data.message) {
//          setLoginStatus( response.data.message);
//       } else {
//          setLoginStatus (response.data[0].message);
//       }
//   })
//   console.log("usernameReg",usernameReg);
// }
console.log("usernameReg",usernameReg);

  useEffect(() => {
    axios.get("http://localhost:4000/user/api/admin/getloginuser").then((response) => {
      if (response.data.loggedIn == true) {
        setRole(response.data.user[0].role);
      }
    });
  }, []);


    return (
      <>
      <div className='image' style={{height:"94vh",width:"98vw",backgroundColor:"pink",marginLeft:"1vw",marginTop:"1vw"}}>
      
      <div style={{backgroundColor:"white",height:"75vh",width:"40vw",marginLeft:"29vw",marginTop:"3vw",position:"absolute"}}>
     <h2 style={{marginLeft:"18vw"}}> Login </h2>
      <Form style={{width:"30vw",marginLeft:"6vw",marginTop:"6vw"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" onChange={(e) => {
          setUernameReg(e.target.value);
       }} placeholder="Enter email" />
          
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" onChange={(e) =>{
          setPasswordReg(e.target.value);
       }} placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      
      </Form.Group>
      <div>
      <Button className='loginButton' variant="primary" type="submit" onClick={submitDetails}>Log In</Button>
      <p style={{marginLeft:"10vw"}}>Not a user? <span style={{color:"blue"}}> <Link to = '/signup'> Sign up  </Link> </span> </p>
      </div>
      <h1> {loginStatus}</h1>
    
    </Form>
      </div>
      
      </div>
    
   
      </>
    );
}
    

export default Login;
