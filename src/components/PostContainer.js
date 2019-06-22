import React from "react";
import { Grid } from "semantic-ui-react";
import Sanitize from "../utils/Sanitize";

import "./style.scss";

const PostContainer = props => {
  const posts = props.post;
  return (
    <Grid stackable columns={4}>
      {posts.map(post => {
        // let description = post.descri;
        return (
          <Grid.Column key={post.author_id}>
            <article className="card">
              <header className="card_thumb">
                <img src={post.media.m} style={{ width: 450 }} />
              </header>
              <div className="card_date">
                <span className="card_date_day">12</span>
                <span className="card_date_month">May</span>
              </div>
              <div className="card_body">
                <div className="card_category">Photos</div>
                <div className="card_title">
                  <a href={post.link}>{post.title}</a>
                </div>
                <div className="card_subtitle">
                  by <a href={"#"}>{post.author}</a>
                </div>
                <p className="card_description">
                  <Sanitize html={post.description} />
                </p>
              </div>
              <footer className="card_footer">
                <span className="icon icon--time">6 min</span>
                <span className="icon icon-comment">
                  <a href="#">39 comments</a>
                </span>
              </footer>
            </article>
          </Grid.Column>
        );
      })}
    </Grid>
  );
};

export default PostContainer;
