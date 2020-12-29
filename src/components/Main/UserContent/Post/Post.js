import React from 'react';
import './Post.css';
import sprite from './../../../sprite.svg';

const Post = () => {
  return (
    <article className="user-content__post post">
      <div className="post__user user">
        <img
          src="img/user.png"
          className="user__photo"
          alt="User"
          width="48"
          height="48"
        />
        <div className="user__info">
          <a href="#d" className="user__name">
            Denis Vladimirov
          </a>
          <div className="user__set">
            <span className="user__span">3 hrs</span>
            <svg className="user__icon" width="20" height="20">
              <use href={`${sprite}#icon-setting`}></use>
            </svg>
          </div>
        </div>
      </div>
      <div className="post__content">
        <p className="post__text">
          Did you know that all of this was made using only components and
          styles from Ant Desing System for Figma?
        </p>
        <img className="post__img" src="img/post-img.jpg" alt="post" />
      </div>
      <div className="post__likes">
        <svg className="post__likes-icon" width="16" height="16">
          <use href={`${sprite}#icon-like`}></use>
        </svg>
        <span className="post__likes-counter">23</span>
      </div>
      <div className="post__post-footer post-footer">
        <div className="post-footer__item">
          <button type="button" className="post-footer__btn">
            <svg className="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-like`}></use>
            </svg>
          </button>
          <span className="post-footer__text">Like</span>
        </div>
        <div className="post-footer__item">
          <button type="button" className="post-footer__btn">
            <svg className="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-message`}></use>
            </svg>
          </button>
          <span className="post-footer__text">Comment</span>
        </div>
        <div className="post-footer__item">
          <button type="button" className="post-footer__btn">
            <svg className="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-share`}></use>
            </svg>
          </button>
          <span className="post-footer__text">Share</span>
        </div>
      </div>
    </article>
  );
};

export default Post;
