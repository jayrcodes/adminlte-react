import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DataTable from '../wrappers/DataTable';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/fetchPosts';

class DataTables extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="content-wrapper">

        <section className="content-header">
          <h1>
            DataTables
            <small>it all starts here</small>
          </h1>
          <ol className="breadcrumb">
            <li><a href="#"><i className="fa fa-dashboard"></i> Home</a></li>
            <li><a href="#">Examples</a></li>
            <li className="active">Blank page</li>
          </ol>
        </section>

        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                  <div className="box-header">
                    <h3 className="box-title">Data Table With Full Features</h3>
                  </div>

                  <div className="box-body">
                    <DataTable posts={this.props.posts}/>
                  </div>

                </div>

              </div>

            </div>

          </section>
      </div>
    );
  }
}

DataTables.propTypes = {
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(DataTables);

