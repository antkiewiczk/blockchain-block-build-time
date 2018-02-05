import React, { Component } from 'react';

class BlockNumberForm extends Component {

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
