import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from '../../assets/logo.svg';
import './App.css';

import { fetchJedi } from '../../actions/jedi';

function mapStateToProps(state) {
  return {
    jedi: state.jedi,
  };
}

class App extends Component {
  componentWillMount() {
    this.fetchJedi();
  }

  fetchJedi() {
    this.props.dispatch(fetchJedi());
  }

  render() {
    const { jedi } = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {jedi.map((jedi, index) => (
          <div key={index}>
            Jedi: id: {jedi.id} name: {jedi.name}
          </div>
        ))}
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
};

export default connect(
  mapStateToProps,
)(App);
