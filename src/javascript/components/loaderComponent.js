import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

class LoaderComponent extends Component {

  render() {
    return (
      <div className="loader-wrapper">
        <Loader 
          type="Ball-Triangle"
          color="#0EBFE9"
          height="100"  
          width="100"
        />
      </div>
    );
  }
}

export default LoaderComponent;
