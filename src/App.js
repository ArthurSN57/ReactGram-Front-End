import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './pages/Home/Home.js';
import Login from './pages/Auth/Login.js';
import Register from './pages/Auth/Register.js';

import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
