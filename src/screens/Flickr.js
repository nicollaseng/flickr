import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostContainer from "../components/PostContainer";
import Loader from "../components/Loader";
import { fetchData } from "../server";

const styles = {
  loader: { marginTop: 20, color: "rgba(26, 255, 98, 0.9)" }
};

class Flickr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  fetchMore = async () => {
    // var data = [];
    var data = await fetchData();
    this.setState(prevData => ({ data: [...prevData.data, ...data] }));
  };

  render() {
    console.log("data", this.state.data);
    const { data } = this.state;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.fetchMore}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            <Loader active inline="centered" className={styles.loader} />;
          </div>
        }
      >
        <PostContainer post={data} loading={false} />
      </InfiniteScroll>
    );
  }
}

export default Flickr;
