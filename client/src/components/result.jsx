import React, { Component } from "react";

const gifWrapper = {
  background: "#1f1f1f"
};

class Result extends Component {
  render() {
    return (
      <div style={gifWrapper}>
        <img alt={this.props.description} src={this.props.embedUrl} />
      </div>
    );
  }
}

export default Result;
