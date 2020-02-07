import React, { Component } from "react";
import Result from "./result";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Skeleton from "@material-ui/lab/Skeleton";

class Results extends Component {
  componentDidUpdate(nextProps) {
    if (!this.props.data && nextProps.data) {
      this.setState({ data: nextProps.data });
    }
  }

  render() {
    return (
      <div>
        {this.props.data === null ? (
          <Skeleton
            id="loadSkeleton"
            variant="circle"
            width={50}
            height={50}
            animation="wave"
          />
        ) : (
          <GridList className="classes.gridList" cols={8}>
            {this.props.data.map((result, i) => (
              <GridListTile key={i}>
                <Result
                  description={result.title}
                  embedUrl={result.images.fixed_height.url}
                ></Result>
              </GridListTile>
            ))}
          </GridList>
        )}
      </div>
    );
  }
}

export default Results;
