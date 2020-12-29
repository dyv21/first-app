import React from 'react';
import './UserList.css';
import sprite from './../../../sprite.svg';

const UserList = () => {
  return (
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
  );
};

export default UserList;
