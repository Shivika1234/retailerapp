import React, { useRef } from 'react'
import Card2 from './Card2'
import './Secondcarousel.css'

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

export default function Secondcarousel() {
 
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
   
    <Card2  cardno='Footware' cardsubtitle='40%-80% off' imageUrl='https://images.pexels.com/photos/14201105/pexels-photo-14201105.jpeg?auto=compress&cs=tinysrgb&w=600'/>
    <Card2  cardno='Daily essentials' cardsubtitle='20%-40% off' imageUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrsT5nSA6qR3o7Vxj1WWLUxKc6Wrkwybjww&usqp=CAU'/>
    <Card2  cardno='Baby products' cardsubtitle='10%-20% off' imageUrl='https://media.istockphoto.com/id/625379326/photo/organic-cosmetic-children-for-bath-on-wooden-bakground-close-up.jpg?b=1&s=170667a&w=0&k=20&c=Zsrhv2BInxdUvtgXg8PFo6ZxRbc5GZd5A4G-8F_3zfk='/>
    <Card2  cardno='Premium phones' cardsubtitle='10%-20% off' imageUrl='https://images.unsplash.com/photo-1573920011462-eb3003086611?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGhvbmVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
    <Card2  cardno='Dresses' cardsubtitle='40%-80% off' imageUrl='https://media.istockphoto.com/id/1443208249/photo/fashion-woman-in-black-long-dress-beautiful-model-in-evening-gown-with-train-over-white.jpg?s=612x612&w=0&k=20&c=GLN4VbiIDMquwu4eK7MSZvVu3a5gNJIrGJkv0SlmGJA='/>
    <Card2  cardno='Nike/Puma...' cardsubtitle='Min 40%' imageUrl='https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' />
    <Card2  cardno='Oils/Juices....' cardsubtitle='Min 80%' imageUrl='https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JvY2VyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
    <Card2  cardno='Famous books' cardsubtitle='Min 50%'  imageUrl='https://images.unsplash.com/photo-1626618012641-bfbca5a31239?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFycnklMjBwb3R0ZXIlMjBib29rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
    <Card2  cardno='Dry fruits' cardsubtitle='Min 30%'  imageUrl='https://images.unsplash.com/photo-1600841867003-d904bd142d29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRyeSUyMGZydWl0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
    
    
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
