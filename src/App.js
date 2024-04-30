
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';


const Home = lazy(() => import('./components/Home/Home'));
const Begin = lazy(() => import('./components/Begin'));
const Entry = lazy(() => import('./components/Entry/Entry'));
const News = lazy(() => import('./components/News/News'));
const Contactus = lazy(() => import('./components/Contactus/Contactus'));
const Signupform = lazy(() => import('./components/Signupform/Signupform'));


function App() {
  return (
   
    <Router>
      {/* Suspense wraps lazy-loaded components providing a fallback UI during loading */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Main div wrapper with a className for styling purposes */}
        <div className="App">
          {/* Routes container to define various routes in the application */}
          <Routes>
            {/* Route definitions mapping paths to components */}
            <Route path="/" element={<Begin />} />           // Route for the initial or root page
            <Route path="/Entry" element={<Entry />} />      // Route for the Entry page
            <Route path="/Home" element={<Home />} />        // Route for the Home page
            <Route path="/News" element={<News />} />        // Route for the News page
            <Route path="/Contactus" element={<Contactus />} />  // Route for the Contact Us page
            <Route path="/Signupform" element={<Signupform />} />  // Route for the Contact Us page
          </Routes>
        </div> 
      </Suspense>
    </Router>
  );
}


export default App;
