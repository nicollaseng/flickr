import React, { Component } from "react";
import axios from "axios";

import PostContainer from "../components/PostContainer.js";

class Flickr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  async componentDidMount() {
    await axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=true`,
        { charset: "utf8" }
      )
      .then(response => {
        this.setState({ data: response.data.items });
      });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <PostContainer post={this.state.data} />;
      </div>
    );
  }
}

export default Flickr;
