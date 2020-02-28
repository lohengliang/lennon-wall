import PropTypes from "prop-types";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, getSignedInUsername } from "../actions";
import Posts from "../components/Posts";
import firebase from "../firebase";
import AddPost from "./AddPost";
var firebaseui = require("firebaseui");

var ui = new firebaseui.auth.AuthUI(firebase.auth());

class AsyncApp extends Component {
  componentDidMount() {
    const { wallName, dispatch } = this.props;
    var uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: function(authResult) {
          console.log(authResult.user.displayName);
          dispatch(getSignedInUsername(authResult.user.displayName));
        }
      },
      signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
      credentialHelper: firebaseui.auth.CredentialHelper.NONE
    };
    ui.start("#firebaseui-auth-container", uiConfig);
    dispatch(fetchPosts(wallName || "wall"));
  }
  render() {
    const { wallName, posts, signedInUsername } = this.props;
    return (
      <div>
        <div id="firebaseui-auth-container"></div>
        <AddPost
          wallName={wallName || "wall"}
          signedInUsername={signedInUsername}
        />
        <Posts posts={posts} />
      </div>
    );
  }
}
AsyncApp.propTypes = {
  posts: PropTypes.array.isRequired,
  wallName: PropTypes.string.isRequired,
  signedInUsername: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};
function mapStateToProps(state, ownProps) {
  const posts = state.postsByWall.posts;
  var wallName = ownProps.match.params.wall;
  const signedInUsername = state.signedInUsername.signedInUsername;
  return { wallName, posts, signedInUsername };
}
export default connect(mapStateToProps)(AsyncApp);
