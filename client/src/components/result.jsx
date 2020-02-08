import React, { Component } from "react";
import Card from "@material-ui/core";

const gifWrapper = {
  background: "#1f1f1f",
  height: "200px",
  width: "200px"
};

class Result extends Component {
  hoverShowInfo() {}

  render() {
    return (
      <div onMouseEnter={this.hoverShowInfo} style={gifWrapper}>
        <a target="_blank" rel="noopener noreferrer" href={this.props.embedUrl}>
          <img alt={this.props.description} src={this.props.embedUrl} />
        </a>
      </div>
    );
  }
}

export default Result;
