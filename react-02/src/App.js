import React from 'react';
import Game from './components/Game.js';
import './App.css';
import logo from './logo.svg';
import gHeart from './graphics/heart.svg';
import gRecycle from './graphics/recycle.svg';
import gPercentage from './graphics/percentage.svg';
import gCross from './graphics/cross.svg';
import gFoot from './graphics/foot.svg';
import gBiohazard from './graphics/biohazard.svg';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      activePage: "heart"
    }
  }

  navClick = e => {
    this.setState({ activePage: e.target.alt })
    console.log(e.target.getAttribute("alt"));
  }

  render() {
    let pageSelect;
    switch (this.state.activePage) {
      case "heart":
        pageSelect =
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
        break;
      case "recycle":
        pageSelect = <Game />
        break;
      default:
        console.log("you blew a switch");
    }

    return (
      <div className="App">
        <div id="iNavBar" className="cNav">
          <img src={gHeart} className="cNavSpin" alt="heart" onClick={this.navClick} />
          <img src={gRecycle} className="cNavSpin" alt="recycle" onClick={this.navClick} />
          <img src={gPercentage} className="cNavSpin" alt="percentage" onClick={this.navClick} />
          <img src={gCross} className="cNavSpin" alt="cross" onClick={this.navClick} />
          <img src={gFoot} className="cNavSpin" alt="foot" onClick={this.navClick} />
          <img src={gBiohazard} className="cNavSpin" alt="biohazard" onClick={this.navClick} />
        </div>
        {pageSelect}
      </div>
    );
  }
}

export default App;
