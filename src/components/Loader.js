import React from "react";
import { css } from "@emotion/core";
import { GridLoader } from "react-spinners";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = () => (
  <div className="sweet-loading">
    <GridLoader
      css={override}
      sizeUnit={"px"}
      size={15}
      color="rgba(26, 255, 98, 0.7)"
    />
  </div>
);

export default Loader;
