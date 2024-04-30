// Import React, Suspense and lazy for dynamic imports and code splitting
import React, { Suspense, lazy } from 'react';
// Import BrowserRouter as Router, Routes and Route for routing support
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import CSS styles for the App component
import './App.css';

// Lazy load the components for performance optimization
// This approach reduces the initial load time by splitting code into separate chunks that load on demand
const Home = lazy(() => import('./components/Home/Home'));
const Begin = lazy(() => import('./components/Begin'));
const Entry = lazy(() => import('./components/Entry/Entry'));
const News = lazy(() => import('./components/News/News'));
const Contactus = lazy(() => import('./components/Contactus/Contactus'));
const Signupform = lazy(() => import('./components/Signupform/Signupform'));

/**
 * Function component for the main App structure
 * Utilizes React Router for SPA routing and navigation
 */
function App() {
  return (
    // Router component to keep UI in sync with the URL
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

// Export the App component as the default export
export default App;
