import React from 'react';
import './Birthday.css';
import sprite from './../../../sprite.svg';

const Birthday = () => {
  return (
    <div className="right-sidebar__birthday birthday">
      <svg className="birthday__icon" width="19" height="19">
        <use href={`${sprite}#icon-gift`}></use>
      </svg>
      <a href="#" className="birthday__link">
        John Doe
      </a>
      <span className="birthday__span">’s birthday is today</span>
    </div>
  );
};

export default Birthday;
