import { combineReducers } from "redux";
import postsByWall from "./postsByWall";
import signedInUsername from "./signedInUsername";

export default combineReducers({
  postsByWall,
  signedInUsername
});
