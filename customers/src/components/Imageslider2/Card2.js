import React from 'react'
import './Card2.css'
import Badge from 'react-bootstrap/Badge';

export default function Card2(props) {
  return (
<>
    
    <div  className='mycard2'><img style={{width:"12vw",height:"14vw",marginLeft:"0.6vw",marginTop:"1vw",borderRadius:"1vw"}} src={props.imageUrl}/>
    <h6 style={{color:"black",marginLeft:"3vw",marginTop:"1vw"}}> {props.cardno} </h6>
  
  
  
 {/* 

<Badge style={{marginLeft:"4vw"}} bg="secondary">New</Badge> */}   
  
    <h6 style={{color:"black",marginLeft:"3vw",color:"#e60000"}}> {props.cardsubtitle} </h6>
    
   </div>
    </>
  )
}

