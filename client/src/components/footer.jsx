import React, { Component } from "react";

var style = {
  position: "fixed",
  left: "0px",
  bottom: "2.4%",
  right: "0px",
  color: "#fff570",
  opacity: 0.6
};

var headerText = {
  fontSize: "19px"
};

class Footer extends Component {
  render() {
    return (
      <div style={style}>
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
        <div>
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
