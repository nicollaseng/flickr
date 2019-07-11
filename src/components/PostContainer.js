import React, { Fragment, Component } from "react";
import { Grid } from "semantic-ui-react";
import {
  tagFormatter,
  dateFormatter,
  authorFormatter
} from "../utils/Formatter";
import Sanitize from "../utils/Sanitize";
import truncate from "lodash/truncate";
import Navbar from "./Navbar";
import Notify, { toastNotify } from "./Notify";
import { connect } from "react-redux";
import { fetchTag, fetchContent } from "../redux/actions/content";

import "../scss/style.scss";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsFiltered: []
    };
  }

  handleSearch = async data => {
    const { fetchTag, fetchContent, tag, tagContent } = this.props;
    let input = data.target.value;
    return input.length > 0 ? await fetchTag(input) : await fetchContent();
  };

  renderGrid = props => {
    const posts = props.post;

    return (
      <div className="card_container">
        <Grid stackable columns={4}>
          {posts.map((post, index) => {
            let tags = tagFormatter(post);
            let date = dateFormatter(post);
            let author = authorFormatter(post);
            let title = truncate(post.title, {
              length: 60,
              separator: ""
            });
            let description = truncate(post.description, {
              length: 100,
              separator: ""
            });
            return (
              <Grid.Column key={index}>
                <article className="card">
                  <header className="card_thumb">
                    <img
                      src={post.media.m}
                      style={{ width: 450 }}
                      alt="media_posted"
                    />
                  </header>
                  <div className="card_date">
                    <span className="card_date_day">{date.day}</span>
                    <span className="card_date_month">{date.month}</span>
                  </div>
                  <div className="card_body">
                    <div className="card_category">Photos</div>
                    <div className="card_title">
                      <a href={post.link}>{title}</a>
                    </div>
                    <div className="card_subtitle">
                      by{" "}
                      <a
                        href={`https://www.flickr.com/photos/${post.author_id}`}
                      >
                        {author}
                      </a>
                    </div>
                    <div className="card_description">
                      <Sanitize html={description} />
                    </div>
                  </div>
                  <footer className="card_footer">
                    <p className="icon">
                      {tags.map((tag, index) => {
                        if (index >= 6) return "";
                        return (
                          <a
                            key={index}
                            href={`https://www.flickr.com/photos/tags/${tag.replace(
                              "#",
                              ""
                            )}`}
                          >
                            {tag}
                            {"  "}
                          </a>
                        );
                      })}
                    </p>
                  </footer>
                </article>
              </Grid.Column>
            );
          })}
        </Grid>
      </div>
    );
  };

  render() {
    return (
      <Fragment>
        <Notify type="error" message="Sorry, its just a test :(" />
        <Navbar
          handleSnackbar={() => toastNotify()}
          handleSearch={this.handleSearch}
          clearData={this.props.clearData}
        />
        {this.renderGrid(this.props)}
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tag: state.content.tag,
  tagContent: state.content.tagContent
});

const mapStateToDispatch = {
  fetchTag,
  fetchContent
};

export default connect(
  mapStateToProps,
  mapStateToDispatch
)(PostContainer);
