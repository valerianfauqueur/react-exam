import React, { Component } from 'react';

class Loadeur extends Component {
  render() {
    return(
      <div className='loader__container'>
        <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
          <rect x="0" y="0" width="100" height="100" fill="none"/>
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"/>
            <circle cx="50" cy="50" r="38.5274" stroke="#c9c327" fill="none" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"/>
            </circle>
          </g>
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"/>
            <circle cx="50" cy="50" r="22.1095" stroke="#c9c327" fill="none" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"/>
            </circle>
          </g>
        </svg>
      </div>
    );
  }
}

export default Loadeur;
