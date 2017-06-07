import React from 'react';
import PropTypes from 'prop-types';

export default function PostsList({ posts }) {
  const emptyMessage = (
    <p>There are no posts yet in your collection.</p>
  );

  let i = 0;
  const postsList = posts.map(post => {
    return <p key={i++}>{post.title}</p>
  });

  return (
    <div className="col-md-3 col-sm-6 col-xs-12">
      {posts.length === 0 ? emptyMessage : postsList}
    </div>
  );

} // end of PostsList

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
}


