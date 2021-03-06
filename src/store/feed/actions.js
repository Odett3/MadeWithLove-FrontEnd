import axios from "axios";
import { appLoading, appDoneLoading } from "../appState/actions";

const API_URL = `http://localhost:4000/feed`;

export function startLoading() {
  return {
    type: "FEED-START-LOADING",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "FEED-POSTS-FETCHED",
    payload: morePosts,
  };
}
export function postCreated() {
  return {
    type: "POST_CREATED",
  };
}

export async function fetchPosts(dispatch, getState) {
  dispatch(appLoading());

  const res = await axios.get(API_URL);

  const morePosts = res.data.allListings;
  dispatch(appDoneLoading());
  dispatch(postsFetched(morePosts));
}
