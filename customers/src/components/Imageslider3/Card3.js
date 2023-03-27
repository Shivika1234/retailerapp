import React from 'react'
import './Card3.css'
import Badge from 'react-bootstrap/Badge';

export default function Card3(props) {
  return (
<>
    
    <div  className='mycard3'><img style={{width:"21vw",height:"14vw",marginLeft:"0.6vw",marginTop:"1vw"}} src={props.imageUrl}/>
 
   <h4 style={{color:"black",marginLeft:"5vw",marginTop:"1vw"}}> {props.cardsubtitle} </h4>
   </div>
    </>
  )
}

