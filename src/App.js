import React from 'react';
import Weather from './Weather'
import Header from "./Header";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <Header />
          <Weather />
        </div>

      </header>
    </div>
  );
}

export default App;
