import React from "react";
import { css } from "@emotion/core";
// First way to import
import { GridLoader } from "react-spinners";
// Another way to import
// import GridLoader from 'react-spinners/GridLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <GridLoader
          css={override}
          sizeUnit={"px"}
          size={15}
          color="rgba(26, 255, 98, 0.7)"
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loader;
