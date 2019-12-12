import React from 'react';
import './App.css';
import logo from './logo.svg';
import heart from './graphics/heart.svg';
import recycle from './graphics/recycle.svg';
import percentage from './graphics/percentage.svg';
import cross from './graphics/cross.svg';
import foot from './graphics/foot.svg';
import biohazard from './graphics/biohazard.svg';

class App extends React.Component {
  constructor() {
    super()
  }

  handleClick = e => {
    console.log(e.target.alt)
  }

  render() {
    return (
      <div className="App">
        <navDiv id="iNavBar" className="cNav">
          <img src={heart} className="cNavSpin" alt="heart" onClick={this.handleClick} />
          <img src={recycle} className="cNavSpin" alt="recycle" onClick={this.handleClick} />
          <img src={percentage} className="cNavSpin" alt="percentage" onClick={this.handleClick} />
          <img src={cross} className="cNavSpin" alt="cross" onClick={this.handleClick} />
          <img src={foot} className="cNavSpin" alt="foot" onClick={this.handleClick} />
          <img src={biohazard} className="cNavSpin" alt="biohazard" onClick={this.handleClick} />
        </navDiv>
        <header className="App-header">
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
}

export default App;
