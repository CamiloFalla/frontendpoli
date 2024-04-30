import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Home.css';
import PreviewMainfo from '../PreviewMaininfo/PreviewMaininfo';
import Infoshow from '../Infoshow/Infoshow';
import BottonfocusQuestion from '../BottonfocusQuestion/BottonfocusQuestion';
import BottonfocusMoney from '../BottonfocusMoney/BottonfocusMoney';
import imageSrc from './../../images/imagescontent/almuerzopic.webp';
import logoips from './../../images/logos/logoips_poli.webp';
import guantes from './../../images/imagescontent/guantes.webp';
import aula from './../../images/imagescontent/capacitation.webp';
import Setobilebar from './../Setmobilebar/Setmobilebar';
import Footer from './../Footer/Footer';


function Home() {
  return (
    <div className="homepart">
      <div className="navbar-home">
        <Setobilebar />
        <Navbar />
        <div className='navbar-home-title'>
          <h1>Bienvenid@</h1>
          <img src={logoips} className="logo-navbar" />
        </div>
      </div>
      
      <PreviewMainfo 
        imageSrc={imageSrc}
        text="Noticias"
      />
      <div className="home-infoshow">
        <Infoshow
          backgroundImage={guantes}
          text="Medidas Sanitarias"
        
        />
        <Infoshow
          backgroundImage={aula}
          text="Capacitación"
        />
      </div>
      <div className="home-buttonfocus">
        <BottonfocusQuestion
          text="Preguntas frecuentes"
        />
        <BottonfocusMoney
          text="Metodos de pago"
        />
        <Footer />
      </div>
      
      
    </div>
  );
}

export default Home ;