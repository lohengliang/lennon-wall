import React from "react";
import { connect } from "react-redux";
import { addPost } from "../actions";

const AddPost = ({ wallName, signedInUsername, dispatch }) => {
  let input;
  return (
    <div>
      {signedInUsername && (
        <div>{signedInUsername} is currently logged in.</div>
      )}
      <br></br>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addPost(wallName, input.value, signedInUsername));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Post</button>
      </form>
    </div>
  );
};

export default connect()(AddPost);
