import React, { Component } from 'react';
import $ from 'jquery';
import PropTypes from 'prop-types';

class DataTable extends Component {
  componentDidMount() {
    $('#example1').DataTable();
  }

  render() {
    const emptyMessage = (
      <tr>
        <td>No posts yet.</td>
      </tr>
    );

    let i = 0;
    const posts = this.props.posts.map(post => {
      return (
        <tr key={i++}>
          <td>{post.title}</td>
        </tr>
      );
    });

    return (
      <table id="example1" className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {posts.length === 0 ? emptyMessage : posts}
        </tbody>
      </table>
    );
  }
}

DataTable.propTypes = {
  posts: PropTypes.array.isRequired
}

export default DataTable;

