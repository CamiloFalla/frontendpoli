import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signbutton = () => {
    
    let navigate = useNavigate(); 
  
    return (
      <button onClick={() => navigate('/Home')} className="initsession">
        Iniciar sesión
      </button>
    );
  };
  
  export { Signbutton };