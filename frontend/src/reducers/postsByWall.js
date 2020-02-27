import { RECEIVE_POSTS, REQUEST_POSTS } from "../actions";

const initialState = {
  posts: []
};

const postsByWall = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSTS:
      return {
        ...state,
        posts: action.posts
      };
    case REQUEST_POSTS:
      return state;
    default:
      return state;
  }
};

export default postsByWall;
