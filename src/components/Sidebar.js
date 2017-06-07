import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import NavLink from '../wrappers/NavLink';
import user2Img from 'admin-lte/dist/img/user2-160x160.jpg';

class Sidebar extends Component {
  render() {
    return (
      <aside className="main-sidebar">

        <section className="sidebar">

          <div className="user-panel">
            <div className="pull-left image">
              <img src={user2Img} className="img-circle" alt="User Image"/>
            </div>
            <div className="pull-left info">
              <p>Alexander Pierce</p>
              <a href="#"><i className="fa fa-circle text-success"></i> Online</a>
            </div>
          </div>

          <form action="#" method="get" className="sidebar-form">
            <div className="input-group">
              <input type="text" name="q" className="form-control" placeholder="Search..."/>
              <span className="input-group-btn">
                    <button type="submit" name="search" id="search-btn" className="btn btn-flat"><i className="fa fa-search"></i>
                    </button>
                  </span>
            </div>
          </form>


          <ul className="sidebar-menu" data-widget="tree">
            <li className="header">MAIN NAVIGATION</li>
            <NavLink to="/">
              <i className="fa fa-th"></i> <span>Dasbhoard</span>
            </NavLink>
            <NavLink to="/tables">
              <i className="fa fa-th"></i> <span>DataTables</span>
            </NavLink>
          </ul>
        </section>

      </aside>
    );
  }
}

export default Sidebar;

