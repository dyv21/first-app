import React from 'react';
import './Header.css';
import sprite from './../sprite.svg'

const Header = () => {
  return (
    <header className="page-header header">
      <div className="header__wrapper container">
        <div className="header__search search">
          <input type="search" className="search__input" placeholder="Search"></input>
        </div>
        <nav className="header__main-nav main-nav">
        <div className="main-nav__user user">
          <img src="img/user.png" className="user__photo" alt="User" width="32" height="32"></img>
          <a href="#d" className="user__name">Denis</a>
        </div>
        <ul className="main-nav__site-list site-list">
          <li className="site-list__item">
            <a href="#d" className="site-list__link">Home</a>
          </li>
          <li className="site-list__item">
            <a href="#d" className="site-list__link">Create</a>
          </li>
        </ul>
        <ul className="main-nav__user-list user-list">
          <li className="user-list__item user-list__item--active">
            <a href="#d" className="user-list__link">
              <svg className="user-list__item-icon" width="18" height="19">
                <use href={`${sprite}#icon-friends`}></use>
              </svg>
            </a>
          </li>
          <li className="user-list__item">
            <a href="#d" className="user-list__link">
              <svg className="user-list__item-icon" width="21" height="21">
                <use href={`${sprite}#icon-message`}></use>
              </svg>
            </a>
          </li>
          <li className="user-list__item">
            <a href="#d" className="user-list__link">
              <svg className="user-list__item-icon" width="16" height="20">
                <use href={`${sprite}#icon-bell`}></use>
              </svg>
            </a>
          </li>
          <li className="user-list__item">
            <a href="#d" className="user-list__link">
              <svg className="user-list__item-icon" width="21" height="21">
                <use href={`${sprite}#icon-info`}></use>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  )
};

export default Header;
