import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    color: "#fff570",
    fontFamily: "'Space Mono', monospace"
  }
};

class Search extends Component {
  constructor(props) {
    super(props);
    this.timeout = 0;
  }

  callOnSearchChange = () => {
    let searchValue = document.getElementById("searchBar").value;
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.props.onSearchChange(searchValue);
      console.log(searchValue);
    }, 1000);
  };

  render() {
    const { classes } = this.props;

    return (
      <div id="searchBarContainer">
        <TextField
          id="searchBar"
          type="text"
          autoFocus={true}
          fullWidth={true}
          defaultValue={this.props.defaultValue}
          onChange={this.callOnSearchChange}
          InputProps={{
            className: classes.input,
            disableUnderline: true
          }}
        ></TextField>
      </div>
    );
  }
}

export default withStyles(styles)(Search);
