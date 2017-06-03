import React, { Component, PropTypes } from 'react';

class DebugError extends Component {

  render() {
    return(
      <div className='debug__container'>
        { this.props.error }
      </div>
    );
  }
}

DebugError.propTypes = {
  error: PropTypes.string,
};

export default DebugError;
