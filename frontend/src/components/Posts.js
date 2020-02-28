import PropTypes from "prop-types";
import React, { Component } from "react";
export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.posts.map((post, i) => (
          <li key={i}>
            {post.SignedInUsername || "Anonymous"} : {post.value}
          </li>
        ))}
      </ul>
    );
  }
}
Posts.propTypes = {
  posts: PropTypes.array.isRequired
};
