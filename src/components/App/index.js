import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import logo from 'assets/logo.svg';
import 'components/App/App.css';
import JediCard from 'components/Jedi/JediCard';

import { fetchJedi } from 'actions/jedi';

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
    const jediCards = jedi.map((jedi, index) => {
      return (<JediCard key={index} jedi={jedi} />);
    });

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <ul className="jedi__container">
          {jediCards}
        </ul>
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
