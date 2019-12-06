import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyComp from './components/MyComponent.js';
import EvenShow from './components/EvenComponent.js';
import OddShow from './components/OddComponent.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myState: "TBD"
    };
    this.counter = 17;
  }

  onPushMe = () => {
    console.log("You pushed me");
    // in the onPushMe function let’s add 1 to the counter and console log the counter
    this.counter++;
    console.log(this.counter);
    this.setState({
      myState: "Now: " + this.counter
    });
  }

  //   From App.js pass a parameter called “whatToSay” to your new “MyComponent”. Hard code the value of “What Ever”.
  // In MyComponent show the parameter on the heading
  // pass the address of “onPushMe” method to MyComponent

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        <EvenShow count={this.counter}/>
        <OddShow count={this.counter}/>

          <h1>I am in control of this application and my name is Bilbo Baggins. Push Me #{this.counter} {this.state.myState}</h1>
          <button onClick={this.onPushMe}>
            Push Me
          </button>
          <MyComp whatToSay="rendering." onPushy={this.onPushMe} />
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
