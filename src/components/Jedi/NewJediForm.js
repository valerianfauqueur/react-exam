import React, { Component } from 'react';
import { connect } from 'react-redux';

import { postJedi } from 'redux/modules/jedi';

class NewJediForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jediName: '',
    };
  }

  handleChange = (event) =>{
    this.setState({
      jediName: event.target.value
    });
  }

  submitJedi = () => {
    this.props.dispatch(
      postJedi({
        name: this.state.jediName
      })
    );
    this.setState({
      jediName: '',
    });
  }

  render() {
    return (
      <div className="jedi__card jedi__card--form">
        <input onChange={ this.handleChange } value={ this.state.jediName } placeholder="Name of the Jedi" type="text" name="jediName"></input>
        <button onClick={ this.submitJedi }>Add the Jedi</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
)(NewJediForm);