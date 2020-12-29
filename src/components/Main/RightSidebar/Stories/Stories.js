import React from 'react';
import './Stories.css';
import sprite from './../../../sprite.svg';

const Stories = () => {
  return (
    <div className="right-sidebar__stories stories">
      <div className="stories__header">
        <h3 className="stories__title">Stories</h3>
        <a href="#d" className="stories__link">
          <svg className="stories__icon" width="16" height="16">
            <use href={`${sprite}#icon-clock`}></use>
          </svg>
          Archive
        </a>
        <a href="#d" className="stories__link">
          Settings
        </a>
      </div>
      <div className="stories__add">
        <img
          className="stories__add-btn"
          src="img/add-stories.png"
          alt="add stories"
          width="48"
          height="48"
        />
        <div className="stories__add-box">
          <a href="#d" className="stories__add-link">
            Add to your story
          </a>
          <p className="stories__add-text">
            Share a photo or video or write something
          </p>
        </div>
      </div>
      <ul className="stories__list">
        <li className="stories__item">
          <img
            className="stories__item-img"
            src="img/concuria.png"
            alt="concuria"
            width="48"
            height="48"
          />
          <div className="stories__item-box">
            <a href="#e" className="stories__item-link">
              Concuria
            </a>
            <p className="stories__item-text">4 hours ago</p>
          </div>
        </li>
        <li className="stories__item">
          <img
            className="stories__item-img"
            src="img/figma.jpg"
            alt="figms"
            width="48"
            height="48"
          />
          <div className="stories__item-box">
            <a href="#e" className="stories__item-link">
              Figma
            </a>
            <p className="stories__item-text">6 hours ago</p>
          </div>
        </li>
        <li className="stories__item">
          <img
            className="stories__item-img"
            src="img/ant-design.png"
            alt="Ant Design"
            width="48"
            height="48"
          />
          <div className="stories__item-box">
            <a href="#e" className="stories__item-link">
              Ant Design
            </a>
            <p className="stories__item-text">8 hours ago</p>
          </div>
        </li>
      </ul>
      <a href="#e" className="stories__link">
        See more...
      </a>
    </div>
  );
};

export default Stories;
