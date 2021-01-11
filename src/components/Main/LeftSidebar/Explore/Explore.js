import React from 'react';
import './Explore.css';
import sprite from './../../../sprite.svg';

const Explore = () => {
  return (
    <div className="left-sidebar__explore explore">
      <h3 className="explore__title">Explore</h3>
      <ul className="explore__list">
        <li className="explore__item">
          <a href="#b" className="explore__link">
            <svg className="explore__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-flag`}></use>
            </svg>
            Pages
          </a>
        </li>
        <li className="explore__item">
          <a href="#b" className="explore__link">
            <svg className="explore__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-headphones`}></use>
            </svg>
            Group
          </a>
        </li>
        <li className="explore__item">
          <a href="#b" className="explore__link">
            <svg className="explore__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-home`}></use>
            </svg>
            Events
          </a>
        </li>
        <li className="explore__item">
          <a href="#b" className="explore__link">
            <svg className="explore__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-rocket`}></use>
            </svg>
            Games
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Explore;
