import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Asegúrate de importar tu archivo CSS

function Navbar() {
  return (
    <header className="header">
      <div className="logo">
        <img src="img/icono.ico" alt="logo de la marca" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#noticias">Noticias</a></li>
          <li><a href="#capacitacion">Capacitacion</a></li>
          <li><a href="#preguntas">Preguntas</a></li>
          <li><a href="#pago">Pago</a></li>
          <li><a href="#sobremi">Sobre mi</a></li>
          <li><a href="#cuenta">Cuenta</a></li>
        </ul>
      </nav>
      <a href="#contacto" className="btn"><button>Contactenos</button></a>
      <a href="#salir" className="btn1"><button>Salir</button></a>
    </header>
  );
}

export default Navbar;
