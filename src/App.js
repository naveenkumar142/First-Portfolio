import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import HomePage from './components/homepage/HomePage';
import About from './components/About/About';
import Protfolio from './components/Protfolio/Protfolio';
import ContactForm from './components/Contact/contactus';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={[<Navbar/>,<HomePage/>,<About/>,<Protfolio/>,<ContactForm/>]}/> */}
      <Route path='/' element={[<Navbar/>,<HomePage/>]}/>
      <Route path='/home' element={[<Navbar/>,<HomePage/>]}/>
      <Route path='/about' element={[<Navbar/>,<About/>]}/>
      <Route path='/portfolio' element={[<Navbar/>,<Protfolio/>]}/>
      <Route path='/contact' element={[<Navbar/>,<ContactForm/>]}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
