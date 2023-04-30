import React from 'react';
import Navbar from './navbar/NavbarHome';
import Footer from './Footer';
const Home=()=>{
    return(
        <div className="home">
            <Navbar/>
            <h1>this is home</h1>
            <Footer/>
        </div>
    )
}

export default Home