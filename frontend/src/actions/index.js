import fetch from "cross-fetch";

export const REQUEST_POSTS = "REQUEST_POSTS";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const ADD_POSTS = "ADD_POSTS";

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
export function addPost(wallName, value) {
  return dispatch => {
    return fetch("https://lit-brushlands-30026.herokuapp.com/posts/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        value,
        wallName
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
