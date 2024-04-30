import React from 'react';
import { useNavigate } from 'react-router-dom';

const Startbutton = () => {
    
    let navigate = useNavigate(); //Hook para navegar
  
    return (
      <button onClick={() => navigate('Entry')} className="buttonStyle">
        ¡Empezar!
      </button>
    );
  };
  
  export { Startbutton };