import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Imagecorousel from '../Imageslider/Imagecorousel';
import './Home.css'
import carouselDress from '../Images/carouselDress.jpg'
import airpods3 from '../Images/airpods3.jpg'
import shoes6 from '../Images/shoes6.jpg'
import Secondcarousel from '../Imageslider2/Secondcarousel';
import Thirdcarousel from '../Imageslider3/Thirdcarousel'
import Sidebar from '../Sidebar/Sidebar';

function Home() {
    return (
        <>
        <Sidebar/>
       <div style={{backgroundColor:"#d9d9d9",height:"30vw"}}>
        <Carousel style={{height:"5vw",marginTop:"1vw",marginLeft:""}}>
      <Carousel.Item style={{height:"30vw"}}>
        <img
          className="d-block w-100"
          src={carouselDress}
          alt="First slide"
          style={{backgroundSize:"contain"}}
        />
        <div style={{backgroundColor:"red"}}>
        <h1 style={{backgroundColor:"red"}} >
        new stock
        </h1>
        </div>
        <Carousel.Caption >
          <h3 style={{marginBottom:"20vw"}}>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"30vw",backgroundSize:"cover"}}>
        <img
        style={{marginBottom:"12vw"}}
          className="d-block w-100"
          src={airpods3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{marginBottom:"20vw"}}>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"30vw"}}>
        <img
          className="d-block w-100"
          src={shoes6}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{marginBottom:"20vw"}}>Third slide label</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div> 

    <div  className='imageslider' style={{marginTop:"4vw"}}>
    <h3 style={{marginLeft:"5vw",position:""}}> DEAL OF THE DAY </h3>
    <Imagecorousel/>
    </div>

    <div  className='imageslider' style={{marginTop:"4vw"}}>
    <h3 className='secondcarouselheading' style={{marginLeft:"5vw",height:"3.2vw"}}> OFFERS </h3>
    <Secondcarousel/>
    </div>

    <div className='imageslider' style={{marginTop:"4vw"}}>
    <h3 className='secondcarouselheading' style={{marginLeft:"5vw",height:"3.2vw"}}> CATEGORIES </h3>
    <Thirdcarousel/>
    </div>

    
    </> 
    );
}

export default Home;