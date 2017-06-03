//dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';

//redux module
import { postJedi } from 'redux/modules/jedi';

function mapStateToProps(state) {
  return {};
}

class NewJediForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jediName: '',
      errors: [],
    };
  }


  isFormValid = () => {
    let errors = [];

    if(!this.state.jediName) {
      errors = [...errors, 'Nom du jedi requis être.'];
    }

    this.setState({
      errors: [...errors],
    });

    return errors.length > 0 ? false : true;
  }

  handleChange = (event) => {
    this.setState({
      jediName: event.target.value
    });
  }

  submitJedi = () => {
    if (this.isFormValid()) {
      this.props.dispatch(postJedi({
          name: this.state.jediName
      }));
      this.setState({
        jediName: '',
      });
    }
  }

  render() {
    const errors = this.state.errors.map((error, index) => {
      return (<li key={index}>{error}</li>);
    });

    return (
      <div className="jedi__card jedi__card--form">
        <input onChange={ this.handleChange } value={ this.state.jediName } placeholder="Name of the Jedi" type="text" name="jediName"></input>
        <button onClick={ this.submitJedi }>Add the Jedi</button>
        <ul className="jedi__form__error">
          {errors}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(NewJediForm);
