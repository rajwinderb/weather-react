import React from 'react';
import Weather from './Weather'
import Header from "./Header";
import './App.css';

function App() {
  return (
    <div className="App">
        <div>
          <div className="container">
            <Header />
            <Weather />
          </div>
          <p className="code"> <a href="https://github.com/rajwinderb/weather-react" target="_blank">Open-source Code</a> by Rajwinder Bhatoe </p>
        </div>
    </div>
  );
}

export default App;
