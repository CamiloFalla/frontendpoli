import React from 'react';
import Navbar from '../Navbar/Navbar';
import './News.css';
import PreviewMainfo from '../PreviewMaininfo/PreviewMaininfo';
import Newsshow from '../Newsshow/Newsshow';

function News() {
  return (
    <div className="News-Container">
      <Navbar />
      <h1>Historias</h1>
      <PreviewMainfo />
      <Newsshow />
      <Newsshow />
      <Newsshow />
      <Newsshow />
      <Newsshow />
      <Newsshow />
    </div>
  );
}

export default News ;