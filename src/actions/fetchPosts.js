export const SET_POSTS = 'SET_POSTS';

export function setPosts(posts) {
  return {
    type: SET_POSTS,
    posts
  }
}

export function fetchPosts() {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(posts => dispatch(setPosts(posts)));

  }
}
