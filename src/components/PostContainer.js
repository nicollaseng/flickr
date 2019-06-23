import React, { Fragment, Component } from "react";
import { Grid } from "semantic-ui-react";
import {
  tagFormatter,
  dateFormatter,
  authorFormatter
} from "../utils/Formatter";
import { Loader } from "semantic-ui-react";
import Sanitize from "../utils/Sanitize";
import truncate from "lodash/truncate";
import filter from "lodash/filter";
import Navbar from "./Navbar";
import Notify, { toastNotify } from "./Notify";

import "./style.scss";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsFiltered: []
    };
  }

  handleSearch = data => {
    let input = data.target.value;
    let posts = this.props.post;
    let postsFilter = filter(posts, post => post.tags.includes(input));
    this.setState({
      postsFiltered: input && input.length > 0 ? postsFilter : posts
    });
  };

  renderGrid = props => {
    const posts = props.post;
    const { loading } = this.props;
    const { postsFiltered } = this.state;

    return (
      <div className="card_container">
        <Grid stackable columns={4}>
          {(postsFiltered && postsFiltered.length > 0
            ? postsFiltered
            : posts
          ).map(post => {
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
              <Grid.Column key={post.author_id}>
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
                    <p className="icon icon-comment">
                      {tags.map(tag => (
                        <a
                          key={tag}
                          href={`https://www.flickr.com/photos/tags/${tag.replace(
                            "#",
                            ""
                          )}`}
                        >
                          {tag}
                          {"  "}
                        </a>
                      ))}
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
        />
        {this.renderGrid(this.props)}
      </Fragment>
    );
  }
}

export default PostContainer;
