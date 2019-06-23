import React, { Component } from "react";
import axios from "axios";

import PostContainer from "../components/PostContainer.js";
import Flickr from "./Flickr";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    const { data } = this.state;
    return <Flickr />;
  }
}

export default Main;
