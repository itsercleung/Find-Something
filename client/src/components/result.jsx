import React, { Component } from "react";

const gifWrapper = {
  position: "relative",
  background: "#0d0d0d",
  textAlign: "center",
  height: "180px"
};

const imgStyle = {
  position: "relative"
};

const infoTextStyle = {
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "14px",
  marginBottom: "-1px"
};

const smallInfoTextStyle = {
  fontSize: "11px",
  overflow: "hidden",
  textOverflow: "ellipsis"
};

const infoAvatarStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "60px",
  marginTop: "20px",
  marginBottom: "5px"
};

const loadingStyle = {
  filter: "grayscale(100%)"
};

class Result extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false
    };
  }

  hoverShowInfo = () => {
    if (!this.state.isHover) {
      this.setState({ isHover: true });
      console.log(this.state.isHover);
    }
  };

  hoverUnshowInfo = () => {
    if (this.state.isHover) {
      this.setState({ isHover: false });
      console.log(this.state.isHover);
    }
  };

  render() {
    return (
      <div
        onMouseEnter={this.hoverShowInfo}
        onMouseLeave={this.hoverUnshowInfo}
        style={gifWrapper}
      >
        <a target="_blank" rel="noopener noreferrer" href={this.props.embedUrl}>
          <img
            alt={this.props.title}
            src={this.props.embedUrl}
            style={imgStyle}
          />
          <p style={loadingStyle}>🤷‍♂</p>
          <div className="infoStyle">
            <p style={infoTextStyle}>{this.props.title}</p>
            <p style={smallInfoTextStyle}>{this.props.date}</p>
            <div>
              <img
                style={infoAvatarStyle}
                alt={this.props.username}
                src={this.props.avatar}
              />
              <p style={smallInfoTextStyle}>{this.props.username}</p>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Result;
