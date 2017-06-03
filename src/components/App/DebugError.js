import React, { Component } from 'react';

class DebugError extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='debug__container'>
        { this.props.error }
      </div>
    );
  }
}

export default DebugError;
