import React from 'react';
import './NewPost.css';
import sprite from './../../../sprite.svg';

const NewPost = () => {
  return (
    <div className="user-content__new-post new-post">
      <h2 className="new-post__title">Create post</h2>
      <textarea
        className="new-post__textarea"
        name="new-post"
        id="new-post"
        placeholder="What’s on your mind, Denis?"
      ></textarea>
      <div className="new-post__buttons">
        <button className="new-post__btn" type="button">
          <svg className="new-post__icon" width="22" height="22">
            <use xlinkHref={`${sprite}#icon-photo`}></use>
          </svg>
          Photo/Video
        </button>
        <button className="new-post__btn" type="button">
          <svg className="new-post__icon" width="22" height="22">
            <use xlinkHref={`${sprite}#icon-friend`}></use>
          </svg>
          Tag friends
        </button>
        <button className="new-post__btn" type="button">
          <svg className="new-post__icon" width="22" height="22">
            <use xlinkHref={`${sprite}#icon-smile`}></use>
          </svg>
          Feeling/Activ...
        </button>
      </div>
    </div>
  );
};

export default NewPost;
