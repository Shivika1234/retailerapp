import React from 'react';
import { FileOutlined, PieChartOutlined, UserOutlined, TeamOutlined, DesktopOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;


function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/">Login in</NavLink>, '1', <PieChartOutlined />),
  getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/dashboard">Dashboard</NavLink>, '2', <PieChartOutlined />),
  getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/banking">Banking</NavLink>, '3', <DesktopOutlined />),
  getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/bookingdetails">Booking details</NavLink>, '4', <DesktopOutlined />),
  getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/product">Product</NavLink>, '5', <DesktopOutlined />),

 
 
];
const SidebarRetailer=()=> {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (
    <>
    <Layout
      style={{
        minHeight: '100vh',
        flex:'0',
      }}
    >
      <Sider style={{backgroundColor:"#17252A",backgroundImage:"url(https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg)"}} collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
       
        <Menu style={{backgroundColor:"#17252A",backgroundImage:"url(https://user-images.githubusercontent.com/25878302/144499035-2911184c-76d3-4611-86e7-bc4e8ff84ff5.jpg)"}} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      
    </Layout>
    </>
  );
}

export default SidebarRetailer;