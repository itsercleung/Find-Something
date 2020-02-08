import React, { Component } from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import Skeleton from "@material-ui/lab/Skeleton";

const Result = React.lazy(() => import("./result"));

class Results extends Component {
  render() {
    return (
      <div>
        {this.props.data === null ? (
          <Skeleton
            id="loadSkeleton"
            variant="circle"
            width={200}
            height={200}
            animation="wave"
          />
        ) : (
          <React.Suspense fallback={<div>Loading</div>}>
            <GridList className="classes.gridList" cols={8}>
              {this.props.data.map((result, i) => (
                <GridListTile key={i}>
                  <Result
                    title={result.title}
                    date={result.import_datetime}
                    username={result.username}
                    avatar={
                      result.username === "" ? "" : result.user.avatar_url
                    }
                    embedUrl={result.images.fixed_height.url}
                  ></Result>
                </GridListTile>
              ))}
            </GridList>
          </React.Suspense>
        )}
      </div>
    );
  }
}

export default Results;
