import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Contactus.css';
import Footer from '../Footer/Footer';
import logoips from './../../images/logos/logoips_poli.webp';
import Setobilebar from './../Setmobilebar/Setmobilebar';


function Contactus() {
  return (
    <div className="contactus-container">
      <div className="navbar-home">
        <Setobilebar />
        <Navbar />
        <div className='navbar-home-title'>
          <h1>Contactan@s</h1>
          <img src={logoips} className="logo-navbar" />
        </div>
      </div>
      
      <div className="bodycontact">
        <h4>Politécnico Gran <br /> Colombiano <br /><br /> Bogotá D.C. Colombia</h4> 
      </div>
      
      <Footer />
    </div>
  );
}

export default Contactus;