
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import {Footer} from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Gallery from './pages/Gallery';
import Donate from './pages/Donate';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Navbar expand="lg" className="bgtop">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto px-5">
            <Nav.Link as={Link} to={"/"} className='px-5 fw-bold'>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"} className='px-5 fw-bold'>About</Nav.Link>
            <Nav.Link as={Link} to={"/gallery"} className='px-5 fw-bold'>Gallery</Nav.Link>
            <Nav.Link as={Link} to={"/contact"} className='px-5 fw-bold'>Contact Us</Nav.Link>
            <Nav.Link as={Link} to={"/donate"} className='px-5 fw-bold'>Donate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path='/donate' element={<Donate/>} />
          </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
