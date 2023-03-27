import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

function Navbar() {

    const {
        token: { colorBgContainer },
      } = theme.useToken();
    return (
        <div>
        <Header
        style={{
            height:'4vw',
          padding: 0,
          backgroundColor:'rgb(33,37,41)',
          background: 'colorBgContainer',
          backgroundColor:'#002140',
          // backgroundColor:'#77E5E5',
          position:'relative'

        }}
      > 
      <p style={{color:"white",float:"right",marginRight:"1vw",alignItems:"center"}}> Shreya Jain </p> 
     <img  style={{height:"2.5vw",width:"3vw",borderRadius:"2vw",float:"right",marginRight:"1vw",marginTop:"0.8vw"}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNNE2la9vfc01CPWiygaruJgbWA-shldvrg&usqp=CAU'/>
      </Header>
      
        </div>
    );
}

export default Navbar;