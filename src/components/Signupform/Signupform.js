import React from 'react';
import { Link } from 'react-router-dom'; 
import './Signupform.css';  // Asegúrate de que el camino es correcto según tu estructura de proyecto
import Footer from './../Footer/Footer';

function SignupForm() {
  return (
    <div className='Signupform-container'>
        <div className="encabezado">
          <i className="fa-solid fa-chevron-left"></i>
          <h3 className="inline">Atrás</h3>
          <h1>Registro</h1>
        </div>
    
      <div className='Formulario'>
        <h4>Ingresa los siguientes datos</h4>
        <div>
          <form action="procesar_formulario.php" method="POST" className="formulario">
            <input type="text" placeholder="Nombre" id="nombre" name="nombre" required />
            <input type="text" placeholder="Apellido Paterno" id="apellido_paterno" name="apellido_paterno" required />
            <input type="text" placeholder="Apellido Materno" id="apellido_materno" name="apellido_materno" required />
            <input type="tel" placeholder="+57 Verificar" id="telefono" name="telefono" pattern="[0-9]{10}" required />
            <input type="submit" value="Registrarse" />
          </form>
        </div>
      </div>
      <footer>
        <div className="final">
            <h4>¿Ya cuentas con una cuenta? <Link to="/Entry" className="login-link">Iniciar sesión</Link></h4>
        </div>
      </footer>
      <Footer />
    </div>
  );
}

export default SignupForm;

