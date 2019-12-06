import React from 'react';

class EvenShow extends React.Component {
  render() {
    // EvenShow - Only show Even when counter is even
    if (this.props.count % 2 !== 0) {
      return null;
    } else {
      return (
        <div>
          <h1>The counter is even.</h1>
        </div>
      )
    }
  }
}
export default EvenShow;