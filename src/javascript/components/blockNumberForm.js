import React, { Component } from 'react';

class BlockNumberForm extends Component {

  constructor(props) {
    super (props);
    this.state = {
      input: null,
    };
  }

  setValue = e => {
    this.setState({input: e.target.value})
  }

  render() {
    const { input } = this.state;
    return (
      <div>
        <form className="form">
          <input type="number" className="form-control" onChange={e => this.setValue(e)}/>
          <button className="button" onClick={e => this.props.onClick(e, input)}>Submit</button>
        </form>
      </div>
    );
  }
}

export default BlockNumberForm;
