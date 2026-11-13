import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <h1>Paradise Nursery</h1>
        <p>Bring nature into your home.</p>
        <Link to="/plants">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default App;