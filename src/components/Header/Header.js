import React from 'react';
import './Header.css';
import './Search/Search';
import Search from './Search/Search';
import Nav from './Nav/Nav';

const Header = () => {
  return (
    <header className="page-header header">
      <div className="header__wrapper container">
        <Search />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
