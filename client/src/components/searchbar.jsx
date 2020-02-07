import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  input: {
    color: "#fff570"
  }
};

class Search extends Component {
  callOnSearchChange = () => {
    let searchValue = document.getElementById("searchBar").value;
    this.props.onSearchChange(searchValue);
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <TextField
          id="searchBar"
          type="text"
          autoFocus="true"
          fullWidth="true"
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
