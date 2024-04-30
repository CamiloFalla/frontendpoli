import React from 'react';
import './Footer.css';  // Asegúrate de que el archivo CSS está correctamente vinculado
import { ReactComponent as FacebookIcon } from './../../images/icons/facebooklogo.svg';
import { ReactComponent as LinkedInIcon } from './../../images/icons/linkedin.svg';
import { ReactComponent as InstagramIcon } from './../../images/icons/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      
      <div className="contenedor">
        <div className="footer-row">
          <a href="https://www.facebook.com/" className="facebook" target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href="https://co.linkedin.com/" className="linkeding" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

