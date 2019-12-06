import React from 'react';

class OddShow extends React.Component {
  render() {
    // OddShow - Only show Odd when counter is Odd
    if (this.props.count % 2 === 0) {
      return null;
    } else {
      return (
        <div>
          <h1>The counter is odd.</h1>
        </div>
      )
    }
  }
}
export default OddShow;