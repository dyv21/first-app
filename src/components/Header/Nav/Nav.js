import React from 'react';
import './Nav.css';
import User from './User/User';
import SiteList from './SiteList/SiteList';
import UserList from './UserList/UserList';

const Nav = () => {
  return (
    <nav className="header__main-nav main-nav">
      <User />
      <SiteList />
      <UserList />
    </nav>
  );
};

export default Nav;
