import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de importar tu archivo CSS

function Navbar() {
  return (
    <header className="header">
      
      <nav>
        <ul className="nav-links">
          <li><a href="Home">Inicio</a></li>
          <li><a href="servicios">Servicios</a></li>
          <li><a href="noticias">Noticias</a></li>
          <li><a href="capacitacion">Capacitacion</a></li>
          <li><a href="preguntas">Preguntas</a></li>
          <li><a href="pago">Pago</a></li>
          <li><a href="sobremi">Sobre mi</a></li>
          <li><a href="cuenta">Cuenta</a></li>
        </ul>
      </nav>
      <Link to="/contactus" ><button className="btn">
        <p>Contactenos</p>
        </button></Link>
      <Link to="/" ><button className="btn1">Salir</button></Link>
    </header>
  );
}

export default Navbar;
