import React, { Component } from "react";

var headerText = {
  fontSize: "17px"
};

var regText = {
  fontSize: "13px"
};

class Footer extends Component {
  render() {
    return (
      <div id="linkWrapper">
        <div style={headerText}>
          <a
            className="link"
            href="https://github.com/itsercleung/Find-Something"
            target="_blank"
            rel="noopener noreferrer"
          >
            FIND-SOMETHING
          </a>
        </div>
        <div style={regText}>
          <a
            className="link"
            href="https://github.com/itsercleung"
            target="_blank"
            rel="noopener noreferrer"
          >
            @itsercleung 2020
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
