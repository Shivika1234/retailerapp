import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import {NavLink, Link, Routes, Route } from 'react-router-dom';


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
getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/dashboard">Dashboard</NavLink>, '2', <DesktopOutlined />),
getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/user">Users</NavLink>, '3', <UserOutlined />),
getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/role">Roles</NavLink>, '4', <TeamOutlined />),
getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1vw"}} to="/category">Category</NavLink>, '5', <FileOutlined />),
getItem(<NavLink  style={{textDecoration:"none",fontSize:"1.1vw"}} to="/subcategory">Sub category</NavLink>, '6', <DesktopOutlined />),
getItem(<NavLink style={{textDecoration:"none",fontSize:"1.1w"}} to="/retailer">Retailer</NavLink>, '7', <DesktopOutlined />),
getItem(<NavLink  style={{textDecoration:"none",fontSize:"1.1vw"}} to="/customer">Customer</NavLink>, '8', <DesktopOutlined />),
getItem(<NavLink  style={{textDecoration:"none",fontSize:"1.1vw"}} to="/frontpage">Offer zone</NavLink>, '9', <DesktopOutlined />),
getItem(<NavLink  style={{textDecoration:"none",fontSize:"1.1vw"}} to="/frontpage">Thirtd party product</NavLink>, '9', <DesktopOutlined />),

];
const Sidebar = () => {
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
    
      <Sider  className='sider' collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
        <Menu   style={{marginTop:"2vw",paddingTop:"1vw"}}  theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    
    </Layout>
    </>
  );
};
export default Sidebar;