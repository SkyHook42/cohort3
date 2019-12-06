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
export default MyComp;