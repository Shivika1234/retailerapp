import React, { useRef } from 'react'
import Card from './Card'
import './Imagecorousel.css'

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

export default function Imagecorousel() {
 
   const cardRef= useRef( );
    
    const prebutton=()=>{
    
      cardRef.current.scrollLeft=  cardRef.current.scrollLeft-675;
    
     
    }

    const nextbutton=()=>{
       
      cardRef.current.scrollLeft=  cardRef.current.scrollLeft+675;
          
    }
  return (
    <div className='product-carousel'>
    <button className='pre-btn' onClick={prebutton}> <p>&lt;</p></button>
    <button className='next-btn' onClick={nextbutton}><p> &gt; </p> </button>

    <div  ref={cardRef}   className='product-container'>
   
    <Card  cardno=' Silk/Cotton Sarees' cardsubtitle='Min 40%' imageUrl='https://media.istockphoto.com/id/1270784869/photo/pretty-indian-young-hindu-bride-in-studio-shot.jpg?b=1&s=170667a&w=0&k=20&c=J49s4ZHXN-TGA1ru8YAFIF_xDZFh7NvoupgdxmDFO9Y='/>
    <Card  cardno='Woollens' cardsubtitle='Min 80%' imageUrl='https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    <Card  cardno='Titan watches' cardsubtitle='Min 30%' imageUrl='https://images.pexels.com/photos/266666/pexels-photo-266666.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    <Card  cardno='Asus/Redmi phones' cardsubtitle='Min 50%' imageUrl='https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG1vYmlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
    <Card  cardno='Home appliances' cardsubtitle='Min 40%' imageUrl='https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
    <Card  cardno='Nike/Puma...' cardsubtitle='Min 40%' imageUrl='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
    <Card  cardno='Oils/Juices....' cardsubtitle='Min 80%' imageUrl='https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
    <Card  cardno='Famous books' cardsubtitle='Min 50%'  imageUrl='https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFycnklMjBwb3R0ZXIlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
    <Card  cardno='Dry fruits' cardsubtitle='Min 30%'  imageUrl='https://images.unsplash.com/photo-1600841867003-d904bd142d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyeSUyMGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
    
    
    </div>
    </div>
  )
}
{/*<div class="card">
<img src="https://www.example.com/image.jpg" alt="Example Image"/>
<div class="card-content">
  <h2>Card Title</h2>
  <p>Card description goes here</p>
</div>
</div>

<div class="card">
<img src="https://www.example.com/image.jpg" alt="Example Image"/>
<div class="card-content">
<h2>Card Title</h2>
<p>Card description goes here</p>
</div>
</div>

<div class="card">
<img src="https://www.example.com/image.jpg" alt="Example Image"/>
<div class="card-content">
<h2>Card Title</h2>
<p>Card description goes here</p>
</div>
</div>

<div class="card">
<img src="https://www.example.com/image.jpg" alt="Example Image"/>
<div class="card-content">
<h2>Card Title</h2>
<p>Card description goes here</p>
</div>
</div>

<div class="card">
<img src="https://www.example.com/image.jpg" alt="Example Image"/>
<div class="card-content">
<h2>Card Title</h2>
<p>Card description goes here</p>
</div>
</div>
<div class="card">
<img src="https://www.example.com/image.jpg" alt="Example Image"/>
<div class="card-content">
<h2>Card Title</h2>
<p>Card description goes here</p>
</div>
</div>
<div class="card">
<img src="https://www.example.com/image.jpg" alt="Example Image"/>
<div class="card-content">
<h2>Card Title</h2>
<p>Card description goes here</p>
</div>
</div> */}
