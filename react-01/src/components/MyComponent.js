import React from 'react';

class MyComp extends React.Component {
  render() {
    return (
      // From App.js pass a parameter called “whatToSay” to your new “MyComponent”. Hard code the value of “What Ever”.
      // In MyComponent show the parameter on the heading
      <div>
        <h1>Hello World from MyComp {this.props.whatToSay}</h1>
        <button onClick={this.props.onPushy}>
          Activate Pushy
          </button>
      </div>
    )
  }
}

// Create two new components EvenComponent and OddComponent with a heading that says what they are.
// In App.js Show all three:  MyComponent, EvenComponent and OddComponent
class EvenComponent extends React.Component {
  render() {
  }
}

class OddComponent extends React.Component {
  render() {
  }
}
// All is well except:
// Only show Even when counter is even and Odd when counter is Odd

export default MyComp;