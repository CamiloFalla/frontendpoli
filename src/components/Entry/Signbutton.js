import React from 'react';
import { useNavigate } from 'react-router-dom';

const Signbutton = () => {
    
    let navigate = useNavigate(); //Hook para navegar
  
    return (
      <button onClick={() => navigate('/Home')} className="initsession">
        Iniciar sesión
      </button>
    );
  };
  
  export { Signbutton };