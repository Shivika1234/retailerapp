import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ViewRetailer from './ViewRetailer';
import AddRetailer from './AddRetailer';

function Retailer() {
    return (
        <div>
        <Tabs style={{backgroundColor:"#00cccc",color:"white",width:"84vw"}}
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="View">
          <ViewRetailer />
        </Tab>
        <Tab  eventKey="profile" title="Add">
          <AddRetailer/>
        </Tab>
       
      </Tabs>  
        </div>
    );
}

export default Retailer;