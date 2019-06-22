import React from "react";
import createAbsoluteGrid from "react-absolute-grid";

// This is the component that will display your data
import PostContainer from "./PostContainer";

// Pass your display component to create a new grid
const Grid = props => {
  return createAbsoluteGrid(PostContainer, {
    post: props.post
  });
};

export default Grid;
