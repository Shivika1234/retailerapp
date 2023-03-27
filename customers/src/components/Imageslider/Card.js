import React from 'react'
import './Card.css'
import Badge from 'react-bootstrap/Badge';

export default function Card(props) {
  return (
<>
    
    <div  className='mycard'><img style={{width:"17vw",height:"14vw",marginLeft:"0.6vw",marginTop:"1vw"}} src={props.imageUrl}/>
    <h5 style={{color:"black",marginLeft:"4vw",marginTop:"1vw"}}> {props.cardno} </h5>
    <div style={{display:"flex"}}>
  
    <Badge style={{marginLeft:"2vw"}} bg="danger">
    Deal of the day
  </Badge>
 {/* 

<Badge style={{marginLeft:"4vw"}} bg="secondary">New</Badge> */}   
  
    <h6 style={{color:"black",marginLeft:"1vw",color:"#404040"}}> {props.cardsubtitle} </h6>
    </div>
   </div>
    </>
  )
}

