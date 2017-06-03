import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import jediLogo from 'assets/jediLogo.png';
import 'components/App/App.css';
import Loader from 'components/App/Loader';
import DebugError from 'components/App/DebugError';
import JediCard from 'components/Jedi/JediCard';
import NewJediForm from 'components/Jedi/NewJediForm';

import { fetchJedi } from 'redux/modules/jedi';

function mapStateToProps(state) {
  return {
    jedi: state.jedi.jedis,
    loading: state.jedi.loading,
    error: state.jedi.error,
    errorMsg: state.jedi.debugError,
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
    const { jedi, loading, error, errorMsg } = this.props;
    const jediCards = jedi.map((jedi, index) => {
      return (<JediCard key={index} jedi={jedi} />);
    });

    return (
      <div className="App">
        <div className="header__container">
          { loading ?
            <Loader /> :
            <img width="50" height="50" src={jediLogo}></img> }
        </div>
        { error ?
        <DebugError error={errorMsg} /> :
        false }
        <ul className="jedi__container">
          {jediCards}
        </ul>
        <NewJediForm />
      </div>
    );
  }
}

App.propTypes = {
  jedi: PropTypes.array,
  loading: PropTypes.boolean,
  error: PropTypes.boolean,
  errorMsg: PropTypes.string
};

export default connect(
  mapStateToProps,
)(App);
