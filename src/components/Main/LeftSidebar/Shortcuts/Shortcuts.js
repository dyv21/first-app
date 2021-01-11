import React from 'react';
import './Shortcuts.css';
import sprite from './../../../sprite.svg';

const Shortcuts = () => {
  return (
    <div className="left-sidebar__shortcuts shortcuts">
      <h3 className="shortcuts__title">Shortcuts</h3>
      <ul className="shortcuts__list">
        <li className="shortcuts__item">
          <a href="#b" className="shortcuts__link">
            <svg className="shortcuts__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-trophy`}></use>
            </svg>
            Product Design
          </a>
        </li>
        <li className="shortcuts__item">
          <a href="#b" className="shortcuts__link">
            <svg className="shortcuts__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-trophy`}></use>
            </svg>
            UX & UI
          </a>
        </li>
        <li className="shortcuts__item">
          <a href="#b" className="shortcuts__link">
            <svg className="shortcuts__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-trophy`}></use>
            </svg>
            Figma
          </a>
        </li>
        <li className="shortcuts__item">
          <a href="#b" className="shortcuts__link">
            <svg className="shortcuts__icon" width="22" height="22">
              <use xlinkHref={`${sprite}#icon-trophy`}></use>
            </svg>
            Ant Design
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Shortcuts;
