import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostContainer from "../components/PostContainer";
import Loader from "../components/Loader";
import { fetchData } from "../server";
import { uniqPost, cleanSearch } from "../utils/Uniq";

const styles = {
  loader: { marginTop: 20, color: "rgba(26, 255, 98, 0.9)" }
};

class Flickr extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataTag: [],
      dataFiltered: [],
      isDataFiltered: false,
      tag: "",
      page: 0
    };
  }

  fetchData = async input => {
    let tag = input && input.target ? input.target.value : this.state.tag;
    var data = await fetchData(tag);

    this.setState(prevState => ({
      data:
        tag.length > 0
          ? uniqPost(data)
          : prevState.tag.length > 0
          ? [...cleanSearch(prevState.data, data), ...data]
          : [...prevState.data, ...uniqPost(data)],
      tag
    }));
  };

  fetchMore = async page => {
    this.fetchData();
  };

  render() {
    const { data, isDataFiltered } = this.state;
    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={this.fetchMore}
        hasMore={true || false}
        loader={
          <div className="loader" key={0}>
            <Loader
              active
              inline="centered"
              className={styles.loader}
              loading={isDataFiltered}
            />
            ;
          </div>
        }
      >
        <PostContainer post={data} handleSearch={this.fetchData} />
      </InfiniteScroll>
    );
  }
}

export default Flickr;
