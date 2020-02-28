import fetch from "cross-fetch";

export const GET_SIGNED_IN_USERNAME = "GET_SIGNED_IN_USERNAME";
export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POSTS = "ADD_POSTS";

export function getSignedInUsername(signedInUsername) {
  return {
    type: GET_SIGNED_IN_USERNAME,
    signedInUsername
  };
}

function requestPosts(wall) {
  return {
    type: REQUEST_POSTS,
    wall
  };
}
function receivePosts(wall, json) {
  return {
    type: RECEIVE_POSTS,
    posts: json
  };
}
export function fetchPosts(wallName) {
  return dispatch => {
    dispatch(requestPosts(wallName));
    return fetch(
      `https://lit-brushlands-30026.herokuapp.com/posts/retrieve?wallName=${wallName}`
    )
      .then(response => response.json())
      .then(json => dispatch(receivePosts(wallName, json)));
  };
}
export function addPost(wallName, value, signedInUsername) {
  return dispatch => {
    return fetch("https://lit-brushlands-30026.herokuapp.com/posts/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value,
        wallName,
        signedInUsername
      })
    })
      .then(response => {
        return response.json();
      })
      .then(post => {
        return dispatch(fetchPosts(wallName));
      });
  };
}
