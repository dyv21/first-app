import React from 'react';
import './UserContent.css';
import sprite from './../../sprite.svg';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';

const UserContent = () => {
  return (
    <section className="page-main__user-content user-content">
      <NewPost />
      <Post />
      <article className="user-content__post post">
        <div className="post__user user">
          <img
            src="img/figma.jpg"
            className="user__photo"
            alt="User"
            width="48"
            height="48"
          />
          <div className="user__info">
            <a href="#f" className="user__name">
              Figma
            </a>
            <div className="user__set">
              <span className="user__span">6 hrs</span>
              <svg className="user__icon" width="20" height="20">
                <use href={`${sprite}#icon-setting`}></use>
              </svg>
            </div>
          </div>
        </div>
        <div className="post__content">
          <p className="post__text">
            <span role="img" aria-label="Emoji">
              📙
            </span>
            Want to implement type in your design system in Figma? This guide
            covers everything you should consider, from choosing the right
            typography scale to naming and organizing your text styles.
          </p>
        </div>
        <div className="post__likes">
          <svg className="post__likes-icon" width="16" height="16">
            <use href={`${sprite}#icon-like`}></use>
          </svg>
          <span className="post__likes-counter">43</span>
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
    </section>
  );
};

export default UserContent;
