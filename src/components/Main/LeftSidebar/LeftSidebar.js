import React from 'react';
import './LeftSidebar.css';
import User from './../../Header/Nav/User/User';
import UserNav from './UserNav/UserNav';
import Shortcuts from './Shortcuts/Shortcuts';
import Explore from './Explore/Explore';

const LeftSidebar = () => {
  return (
    <section className="page-main__left-sidebar left-sidebar">
      <User />
      <UserNav />
      <Shortcuts />
      <Explore />
    </section>
  );
};

export default LeftSidebar;
