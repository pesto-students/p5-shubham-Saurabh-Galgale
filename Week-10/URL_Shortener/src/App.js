import { Route, Routes } from 'react-router-dom';
import './App.css';
import Shorter from './components/Shorter';
import About from './components/About';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Shorter />}></Route>
      <Route path='/Contact Us' element={<Rating />}></Route>
      <Route path='/About' element={<About />}></Route>
    </Routes>
    <Footer />
    {/* <Navbar />
    <Shorter />
    <Rating />
    <Footer /> */}
    </>
  );
}

export default App;
