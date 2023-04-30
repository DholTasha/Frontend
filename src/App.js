import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerLogin from './components/login/CunstomerLogin';
import PathakLogin from './components/login/PathakLogin'
import PathakSignup from './components/login/PathakSignUp'
import CustomerSignup from './components/login/CustmerSignUp'
import Home from './components/Home';

function App() {
  return (
    <Router>
          <div className="App">
            <div className="content">
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/customerlogin" element={<CustomerLogin/>} />
                <Route path="/pathaklogin" element={<PathakLogin/>} />
                <Route path="/customerlogin" element={<CustomerLogin/>} />
                <Route path="/customersignup" element={<CustomerSignup/>} />
                <Route path="/pathaksignup" element={<PathakSignup/>} />
                {/* <Route path="*" element={<NotFound/>} /> */}
            </Routes>
            </div>
        </div>
    </Router>
    
  );
}

export default App;