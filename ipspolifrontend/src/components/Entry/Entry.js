import React, { useState } from 'react';
import './Entry.css';
import { Signbutton } from './Signbutton';
import { Outlet } from 'react-router-dom';


function Entry() {
  const [email, setEmail] = useState(''); // Estado para guardar el email
  const [password, setPassword] = useState(''); // Estado para guardar la contraseña

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    console.log('Email:', email, 'Password:', password);
    // Aquí puedes añadir lógica para manejar la autenticación
  };

  return (
    <div className="entry-container">
        <h1>Ingreso Seguro</h1>
        <form onSubmit={handleSubmit}>
          
          <input
              type="email"
              id="email"
              placeholder='Correo'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
          />
          
          
          <input
              type="password"
              id="password"
              placeholder='Contraseña'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
          />
          

          <Signbutton />
        </form>
        <p>
        ¿Aún no tienes cuenta? <a href="URL_DE_REGISTRO">Regístrate</a>
        </p>
        <p>
        <a href="URL_DE_REGISTRO">¿Olvidaste tu contraseña?</a>
        </p>
        <p>
        O ingresa a través de 
        </p>
        <Outlet />
    </div>
  );
}

export default Entry;
