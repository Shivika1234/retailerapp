import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Addinventory from './Addinventory';
import Viewinventory from './Viewinventory';

function Product() {
    return (
      <div>
        <Tabs
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        style={{marginLeft:"0vw",border:"1px solid grey",borderRadius:"4px",width:"35vw",color:"black"}}
      >
        <Tab eventKey="home" title="Add inventory">
          <Addinventory />
        </Tab>
        <Tab eventKey="profile" title="View inventory">
          <Viewinventory />
        </Tab>
     
      </Tabs>
      </div>
    );
}

export default Product;