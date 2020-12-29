import React from 'react';
import './SiteList.css';

const SiteList = () => {
  return (
    <ul className="main-nav__site-list site-list">
      <li className="site-list__item">
        <a href="#d" className="site-list__link">
          Home
        </a>
      </li>
      <li className="site-list__item">
        <a href="#d" className="site-list__link">
          Create
        </a>
      </li>
    </ul>
  );
};

export default SiteList;
