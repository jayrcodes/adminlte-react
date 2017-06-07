import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

class NavLink extends Component {
  render() {
    let isActive = this.props.location.pathname === this.props.to;
    let className = isActive ? 'active' : '';
    let {to, children} = this.props;

    return(
      <li className={className}>
        <Link to={to} children={children}/>
      </li>
    );
  }
}

export default withRouter(NavLink);

