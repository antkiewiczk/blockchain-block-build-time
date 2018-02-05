import React, { Component } from 'react';

class NoMetamask extends Component {

  render() {
    return (
      <div className="app">
        <h1 className="headline__primary">
          In order for this app to work properly, you need to have the <a className="link" href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en" target="_blank">
            Metamask
          </a> chrome extension installed.
        </h1>
        <h2 className="headline__secondary">
          Please try again once the extension is initialized in your browser.
        </h2>
      </div>
    );
  }
}

export default NoMetamask;
