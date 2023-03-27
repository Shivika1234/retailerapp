import './App.css';
// import Home from './components/Home/Home'
import Navbarantd from './Files/Navbar/Navbarantd';
import {Routes,Route} from 'react-router-dom'
import WomenFashion from './Categories/Women/WomenFashion';

function App() {
  return (
    <div>
    
    <Navbarantd/>
    <WomenFashion/>
   {/* <Home/>*/} 

   
{/*  <Routes>
   
    <Route path="/womenfashion" element={<WomenFashion/>}/>
    
    </Routes> */}
   
    </div>
  );
}

export default App;
