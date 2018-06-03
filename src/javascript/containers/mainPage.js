import React, { Component } from 'react';
import BlockNumberForm from '../components/blockNumberForm.js';
import LineChartComponent from '../components/lineChartComponent.js';
import LoaderComponent from '../components/loaderComponent.js';

import logo from '../../ethereum_logo.svg';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBlocks: 0,
      currentBlockNumber: 0,
      currentBlockTimestamp: 0,
      previousBlockNumber: 0,
      previousBlockTimestamp: 0,
      dataReady: '',
      wrongNumber: false,
      formSubmitted: false,
    };
  }

  data = [];
  i = 0;
  
  submitForm(value) {
    this.data = [];
    this.i = 0;
    this.setState({numberOfBlocks: value, formSubmitted: true});
    this.getLatestBlock();
  }

  checkNumber = (e, input) => {
    e.preventDefault();
    if (input > 2 && input < 201) {
      this.submitForm(input);
      this.setState({wrongNumber: false});
    } else {
      this.setState({wrongNumber: true});
    }
  }

  getLatestBlock() {
    window.web3.eth.getBlock('latest', (error, result) => {
      if(!error) {
        const blockNumber = result.number;
        const blockTimestamp = result.timestamp;
        this.setState({currentBlockNumber: blockNumber, currentBlockTimestamp: blockTimestamp});
        this.getPreviousBlock(this.state.currentBlockNumber, this.state.currentBlockTimestamp);  
      }
    })
  }

  getPreviousBlock(currentBlockNumber, currentBlockTimestamp) {
    const quantity = parseInt(this.state.numberOfBlocks);
    window.web3.eth.getBlock(currentBlockNumber - quantity, (error, result) => {
      if(!error) {
        const blockNumber = result.number;
        const blockTimestamp = result.timestamp;
        this.setState({previousBlockNumber: blockNumber, previousBlockTimestamp: blockTimestamp});
        this.countAverageBlockBuildTime();
        this.getBlockBuildTimes(this.state.currentBlockNumber, this.state.currentBlockTimestamp);        
      }
    })
  }

  countAverageBlockBuildTime() {
    if (this.state.numberOfBlocks) {
      return `The average time to build a block in Ethereum Blockchain (based on previous ${this.state.numberOfBlocks} blocks) =  `+ ((this.state.currentBlockTimestamp - this.state.previousBlockTimestamp) / this.state.numberOfBlocks).toFixed(3) + 's';
    }
  }

  getBlockBuildTimes(currentBlockNumber, currentBlockTimestamp) {
    const numberOfBlocks = parseInt(this.state.numberOfBlocks);

    window.web3.eth.getBlock(currentBlockNumber - 1, (error, result) => {
      while (this.i < numberOfBlocks) {
        if (!error && result !== null) {
          const blockNumber = result.number;
          const blockTimestamp = currentBlockTimestamp - result.timestamp;
          this.data.unshift({'number': blockNumber, 'buildTime': blockTimestamp});
          this.i++;
          return this.getBlockBuildTimes(blockNumber, result.timestamp);
        } else {
          return this.getBlockBuildTimes(currentBlockNumber, currentBlockTimestamp);
        }
      }
    });
    if (this.data.length === numberOfBlocks) {
      this.setState({dataReady: true});
    } else {
      this.setState({dataReady: false});
    }
  }

  displayChart() {
    if (this.state.dataReady) {
      return (
        <LineChartComponent 
          data={this.data}
        />
      )
    } else if (this.state.dataReady === false) {
      return (
        <LoaderComponent />
      )
    }
  }

  render() {
    const { formSubmitted, wrongNumber } = this.state;

    return (
      <div className="app">
        <div className="container">
          {!formSubmitted && <img src={logo} className="logo" alt="logo" />}
          <h1 className="headline__primary">
            Welcome to Ethereum Blockchain average block build time checker.
          </h1>
          <p className="text">
            Please provide the number of blocks you wish to check. They count from the most recent block.
          </p>
          <BlockNumberForm 
            onClick={this.checkNumber}
          />
          {wrongNumber && <p className="text--error">Please provide a number between 3 and 200</p>}
          <div className="result">
            <h2 className="headline__secondary">{this.countAverageBlockBuildTime()}</h2>
          </div>
          {this.displayChart()}
        </div>
      </div>
    );
  }
}

export default MainPage;
