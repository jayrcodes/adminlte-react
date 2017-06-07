import { SET_POSTS } from '../actions/fetchPosts';

export default function games(state = [], action = []) {
  switch (action.type) {
    case SET_POSTS:
      return action.posts;

    default: return state;
  }
}
