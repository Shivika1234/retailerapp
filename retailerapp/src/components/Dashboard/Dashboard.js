import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { Chart } from "react-google-charts";


export const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  
  export const options = {
    title: "My Daily Activities",
  };

  export const data1 = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
  ];
  
  export const options1 = {
    title: "Company Performance",
    hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
    vAxis: { minValue: 0 },
    chartArea: { width: "50%", height: "70%" },
  };
function Dashboard() {


    return (
        <div style={{width:"90vw",marginLeft:"0vw"}}>
        <Container>
        <Row>
        <Col sm>
        <Card style={{marginTop:"2vw",width: '15rem' ,height:"12vw",borderRadius:"0px", boxShadow:"3px 5px 4px #002966" }}>
        <Card.Body>
          <h3 style={{color:"#660066",borderRadius:"5px",height:"3vw"}}>  Total Bookings </h3>
        <div style={{height:"6vw",boxShadow:"1px 1px 4px 2px grey",marginTop:"1vw"}}>
        <h2 style={{textAlign:"center",padding:"1.5vw",color:"#001a66"}}> 1000</h2>
        </div>
          </Card.Body>
      </Card>
        </Col>

        <Col sm>
        <Card style={{ marginTop:"2vw",width: '15rem' ,height:"12vw",borderRadius:"0px", boxShadow:"3px 5px 4px #002966"}}>
        <Card.Body>
         <h3 style={{color:"#669999"}}> Stock available</h3>
         <div style={{height:"6vw",boxShadow:"1px 1px 4px 2px grey",marginTop:"1vw"}}></div>

        </Card.Body>
      </Card>
        </Col>

        <Col sm>
        <Card style={{  marginTop:"2vw",width: '15rem' ,height:"12.3vw",borderRadius:"0px",boxShadow:"3px 5px 4px #002966"}}>
      <Card.Body>
        <h3 style={{color:"#4d004d"}}> Total Revenue </h3>
        <div style={{height:"6vw",boxShadow:"1px 1px 4px 2px grey",marginTop:"1vw"}}>
        <h2 style={{textAlign:"center",padding:"1.5vw",color:"#001a66"}}> 500000</h2>
        </div>

       
       
      </Card.Body>
    </Card>
        </Col>

        <Col sm>
        <Card style={{  marginTop:"2vw",width: '15rem' ,height:"12.3vw",borderRadius:"0px",boxShadow:"3px 5px 4px #002966"}}>
      <Card.Body>
        <h3 style={{color:"#669999",textAlign:"center"}}> Extra</h3>
        <div style={{height:"6vw",boxShadow:"1px 1px 4px 2px grey",marginTop:"1vw"}}>
        <h2 style={{textAlign:"center",padding:"1.5vw",color:"#001a66"}}> 1000000</h2>

        </div>

      </Card.Body>
    </Card>
        </Col>

        </Row>

        <Row>
        <Col style={{}}>
        
        <Carousel  style={{marginTop:"5vw",marginLeft:"0vw",boxShadow:"3px 3px 8px 1.5px #002966"}}>
      <Carousel.Item style={{height:"20vw",width:"58vw"}}>
      <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"300px"}
    />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"20vw",width:"58vw"}}>
      <Chart
      chartType="AreaChart"
      width="100%"
      height="500px"
      data={data1}
      options={options1}
    />

        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        </Col>

<Col style={{marginTop:"8vw"}}>
<h2 style={{textAlign:"center",color:"#0099e6"}}> Retailer Dashboard </h2>
<p style={{marginLeft:"3vw"}}> Welcome to the retailer dashboard. For any queries please contact on no. 9808365427.Email= shivika@gmail.com </p>

</Col>
     
        </Row>
        
        
        </Container>
        </div>
    );
}

export default Dashboard;