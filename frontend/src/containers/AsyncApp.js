import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import Posts from "../components/Posts";
import AddPost from "./AddPost";

class AsyncApp extends Component {
  componentDidMount() {
    const { wallName, dispatch } = this.props;
    dispatch(fetchPosts(wallName || "wall"));
  }
  render() {
    const { wallName, posts } = this.props;
    return (
      <div>
        <AddPost wallName={wallName || "wall"} />
        <Posts posts={posts} />
      </div>
    );
  }
}
AsyncApp.propTypes = {
  posts: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {
  const posts = state.postsByWall.posts;
  var wallName = ownProps.match.params.wall;
  return { wallName, posts };
}
export default connect(mapStateToProps)(AsyncApp);
