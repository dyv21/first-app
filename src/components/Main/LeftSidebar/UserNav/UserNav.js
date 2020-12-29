import React from 'react';
import './UserNav.css';
import sprite from './../../../sprite.svg';

const Usernav = () => {
  return (
    <ul className="left-sidebar__user user-nav">
      <li className="user-nav__item">
        <a href="#b" className="user-nav__link">
          <svg className="user-nav__icon" width="19" height="19">
            <use href={`${sprite}#icon-news-feed`}></use>
          </svg>
          News Feed
        </a>
      </li>
      <li className="user-nav__item">
        <a href="#b" className="user-nav__link">
          <svg className="user-nav__icon" width="22" height="22">
            <use href={`${sprite}#icon-mes`}></use>
          </svg>
          Messages
        </a>
      </li>
      <li className="user-nav__item">
        <a href="#b" className="user-nav__link">
          <svg className="user-nav__icon" width="22" height="22">
            <use href={`${sprite}#icon-marketplace`}></use>
          </svg>
          Marketplace
        </a>
      </li>
    </ul>
  );
};

export default Usernav;
