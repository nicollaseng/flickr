import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroller";
import PostContainer from "../components/PostContainer";
import Loader from "../components/Loader";
import { fetchData } from "../server";
import { fetchContent, fetchTag } from "../redux/actions/content";
import { connect } from "react-redux";

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
      page: 0,
      search: true
    };
  }

  clearData = () => this.setState({ data: [] });

  render() {
    const {
      content,
      tag,
      tagContent,
      type,
      fetchTag,
      fetchContent,
      isRepeatedTagContent
    } = this.props;

    let isContent = type === "content";

    return (
      <InfiniteScroll
        pageStart={0}
        loadMore={() =>
          isContent ? fetchContent(content) : fetchTag(tag, tagContent, true)
        }
        hasMore={true}
        loader={
          !isRepeatedTagContent && (
            <div className="loader" key={0}>
              <Loader
                active={!isRepeatedTagContent}
                inline="centered"
                className={styles.loader}
                // loading={isDataFiltered}
              />
              ;
            </div>
          )
        }
      >
        <PostContainer
          post={isContent ? content : tagContent}
          clearData={this.clearData}
        />
      </InfiniteScroll>
    );
  }
}

const mapStateToProps = state => ({
  content: state.content.content,
  tag: state.content.tag,
  tagContent: state.content.tagContent,
  type: state.content.type,
  isRepeatedTagContent: state.content.isRepeatedTagContent
});

const mapStateToDispatch = {
  fetchTag,
  fetchContent
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(Flickr);
