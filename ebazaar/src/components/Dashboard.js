import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Googlechart from './Googlechart';
import Stylesheet from './Dashboard.css' 


function Dashboard() {
    return (
        
        <Container>
        <Row style={{marginTop:"3vw"}}>
          <Col>
          <Card style={{ width: '15rem' ,height:"12vw",borderRadius:"0px",backgroundColor:"#b366ff" }}>
      <Card.Body>
        <Card.Title style={{color:"white"}}>Total Users</Card.Title>
        <Card.Subtitle style={{color:"white",fontSize:"1.2vw"}} className="mb-2 ">552025</Card.Subtitle>
     
     <img style={{height:"6vw",width:"15vw"}} src='data:image/png;base64,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'/>
       
      </Card.Body>
    </Card>
          </Col>
          
          <Col>
          <Card style={{width: '15rem' ,height:"12vw",borderRadius:"0px",backgroundColor:"#1affb2" }}>
      <Card.Body>
        <Card.Title style={{color:"grey"}}>Total retailers</Card.Title>
        <Card.Subtitle style={{color:"white"}} className="mb-2">Card Subtitle</Card.Subtitle>
        <img style={{height:"6vw",width:"15vw"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzTQ8WIJAXvnSeIfQ_5uKUkXBfWo2HeqZZlw&usqp=CAU'/>

       
      </Card.Body>
    </Card>
          </Col>
          
          <Col>
         
          <Card style={{ width: '15rem' ,height:"12.3vw",borderRadius:"0px",backgroundColor:"#809fff"}}>
      <Card.Body>
        <Card.Title style={{color:"white"}}>Total customers</Card.Title>
        <Card.Subtitle  style={{color:"white"}} className="mb-2 ">Card Subtitle</Card.Subtitle>
        <img style={{height:"6vw",width:"15vw"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnMJfecRXHNfCFnCVwfUowffxVtKVUtJVhVw&usqp=CAU'/>

       
       
      </Card.Body>
    </Card>
   

   {/* <div style={{border:"1px solid gray",height:"12.5vw",backgroundColor:"#809fff"}}>
    
    <div style={{}}>
      <h4 style={{color:"white",marginTop:"0vw"}}>55020</h4>
      <p style={{color:"white"}} >Total users</p>
      <div style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUym_fE3URcYR5k7qKlbMiFlb7QvyVt4rqA&usqp=CAU)',height:"6.6vw",backgroundSize:"cover",width:"17.7vw",marginTop:"0vw"}}> </div>
    </div>
  </div>*/} 
          </Col>
          <Col>
        { /* <Card style={{ width: '15rem' ,height:"12vw",borderRadius:"0px",backgroundColor:"#ffad33"}}>
      <Card.Body>
        <Card.Title>Total customers</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <div style={{backgroundColor:"white",height:"2vw",width:"16vw",marginRight:"5vw"}}></div>
       
      </Card.Body>
    </Card>*/}

    <div style={{border:"1px solid gray",height:"12vw",backgroundColor:"#ffad33"}}>
    
    <div>
      <h5 style={{color:"white"}}>Card Title</h5>
      <p >the </p>
      <div style={{backgroundImage:'url()',height:"6.8vw",backgroundSize:"cover",width:"17vw",marginBottom:"1.5vw"}}> </div>
    </div>
  </div>
          </Col>
        </Row>
        <div style={{backgroundImage:'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUym_fE3URcYR5k7qKlbMiFlb7QvyVt4rqA&usqp=CAU)'}}>
     
        </div>

        <Googlechart/>
      </Container>  
      
    );
}

export default Dashboard;