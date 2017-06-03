//dependencies
import React, { Component } from 'react';

//style
import 'components/Jedi/Jedi.css';

class JediCard extends Component {

  render() {
    const jedi = this.props.jedi;

    return (
      <li className="jedi__card">
        <h2 className="jedi__name">{jedi.name}</h2>
        <p className="jedi__registrationNumber">Registration number: {jedi.id}</p>
      </li>
    );
  }

}

export default JediCard;
