import React from 'react';
import './App.css';
import logo from './logo.svg';
import heart from './graphics/heart.svg';
import recycle from './graphics/recycle.svg';
import percentage from './graphics/percentage.svg';
import cross from './graphics/cross.svg';
import foot from './graphics/foot.svg';
import biohazard from './graphics/biohazard.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="iNavBar" className="cNav">
          <img src={heart} className="cNavSpin" alt="heart" />
          <img src={recycle} className="cNavSpin" alt="recycle" />
          <img src={percentage} className="cNavSpin" alt="percentage" />
          <img src={cross} className="cNavSpin" alt="cross" />
          <img src={foot} className="cNavSpin" alt="foot" />
          <img src={biohazard} className="cNavSpin" alt="biohazard" />
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
