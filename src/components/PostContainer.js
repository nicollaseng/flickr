import React, { Fragment } from "react";
import { Grid } from "semantic-ui-react";
import {
  tagFormatter,
  dateFormatter,
  authorFormatter
} from "../utils/Formatter";
import { Loader } from "semantic-ui-react";
import Sanitize from "../utils/Sanitize";
import truncate from "lodash/truncate";
import Navbar from "./Navbar";
import Notify, { toastNotify } from "./Notify";

import "./style.scss";

const renderGrid = props => {
  const posts = props.post;
  const { loading } = props;

  if (loading) {
    return <Loader active inline="centered" style={{ marginTop: 20 }} />;
  } else {
    return (
      <div className="card_container">
        <Grid stackable columns={4}>
          {posts.map(post => {
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
                    <p className="card_description">
                      <Sanitize html={description} />
                    </p>
                  </div>
                  <footer className="card_footer">
                    <p className="icon icon-comment">
                      {tags.map(tag => (
                        <a
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
  }
};

const PostContainer = props => {
  return (
    <Fragment>
      <Notify type="error" message="Sorry, its just a test :(" />
      <Navbar handleSnackbar={() => toastNotify()} />
      {renderGrid(props)}
    </Fragment>
  );
};

export default PostContainer;
