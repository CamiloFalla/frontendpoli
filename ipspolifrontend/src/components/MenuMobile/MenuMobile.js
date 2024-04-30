import React from 'react';
import { Link } from 'react-router-dom';
import './MenuMobile.css'; 

function MenuMobile() {
  return (
    <div className="nmobile-menu">
      <ul>
        <li>
          <Link to="/Home" className="title">Inicio</Link>
        </li>
        <li>
          <Link to="/Medicalservices" className="title">Servicios</Link>
        </li>
        <li>
          <Link to="/News" className="title">Noticias</Link>
        </li>
        <li>
          <Link to="/School" className="title">Capacitacion</Link>
        </li>
        <li>
          <Link to="/Frequentsasking" className="title">Preguntas</Link>
        </li>
        <li>
          <Link to="/Paymethod" className="title">Metodos de pago</Link>
        </li>
        <li>
          <Link to="/Contactus" className="title">Contactenos</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Myhistory" className="title">Mi historia</Link>
        </li>
        <li>
          <Link to="/Profile" className="title">Mi cuenta</Link>
        </li>
        <li>
          <Link to="/Settings" className="title">Configuracion</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Contactus" className="email">myemail@example.com</Link>
        </li>
        <li>
          <Link to="/Begin" className="sign-out">Salir</Link>
        </li>
      </ul>
    </div>
  );
}

export default MenuMobile;
