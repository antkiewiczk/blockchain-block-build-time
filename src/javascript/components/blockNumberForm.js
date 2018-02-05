import React, { Component } from 'react';
import { render } from 'react-dom';

class BlockNumberForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <form className="form">
          <input type="number" className="form-control" />
          <button className="button" onClick={this.props.onClick}>Submit</button>
        </form>
      </div>
    );
  }
}

export default BlockNumberForm;
