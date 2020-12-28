import React from 'react';
import './Main.css';
import sprite from './../sprite.svg'

const Main = () => {
  return (
    <main className="page-main container">
      <section className="page-main__left-sidebar left-sidebar">
        <div className="left-sidebar__user user">
          <img src="img/user.png" className="user__photo" alt="User" width="32" height="32"></img>
          <a href="#b" className="user__name">Denis Vladimirov</a>
        </div>
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
        <div className="left-sidebar__shortcuts shortcuts">
          <h3 className="shortcuts__title">Shortcuts</h3>
          <ul className="shortcuts__list">
            <li className="shortcuts__item">
              <a href="#b" className="shortcuts__link">
                <svg className="shortcuts__icon" width="22" height="22">
                  <use href={`${sprite}#icon-trophy`}></use>
                </svg>
                Product Design
              </a>
            </li>
            <li className="shortcuts__item">
              <a href="#b" className="shortcuts__link">
                <svg className="shortcuts__icon" width="22" height="22">
                  <use href={`${sprite}#icon-trophy`}></use>
                </svg>
                UX & UI
              </a>
            </li>
            <li className="shortcuts__item">
              <a href="#b" className="shortcuts__link">
                <svg className="shortcuts__icon" width="22" height="22">
                  <use href={`${sprite}#icon-trophy`}></use>
                </svg>
                Figma
              </a>
            </li>
            <li className="shortcuts__item">
              <a href="#b" className="shortcuts__link">
                <svg className="shortcuts__icon" width="22" height="22">
                  <use href={`${sprite}#icon-trophy`}></use>
                </svg>
                Ant Design
              </a>
            </li>
          </ul>
        </div>
        <div className="left-sidebar__explore explore">
          <h3 className="explore__title">Explore</h3>
          <ul className="explore__list">
            <li className="explore__item">
              <a href="#b" className="explore__link">
                <svg className="explore__icon" width="22" height="22">
                  <use href={`${sprite}#icon-flag`}></use>
                </svg>
                Pages
              </a>
            </li>
            <li className="explore__item">
              <a href="#b" className="explore__link">
                <svg className="explore__icon" width="22" height="22">
                  <use href={`${sprite}#icon-headphones`}></use>
                </svg>
                Group
              </a>
            </li>
            <li className="explore__item">
              <a href="#b" className="explore__link">
                <svg className="explore__icon" width="22" height="22">
                  <use href={`${sprite}#icon-home`}></use>
                </svg>
                Events
              </a>
            </li>
            <li className="explore__item">
              <a href="#b" className="explore__link">
                <svg className="explore__icon" width="22" height="22">
                  <use href={`${sprite}#icon-rocket`}></use>
                </svg>
                Games
              </a>
            </li>
          </ul>
        </div>
      </section>     
      <section class="page-main__user-content user-content">
      <div class="user-content__new-post new-post">
        <h2 class="new-post__title">Create post</h2>
        <textarea class="new-post__textarea" name="new-post" id="new-post" placeholder="What’s on your mind, Denis?"></textarea>
        <div class="new-post__buttons">
          <button class="new-post__btn" type="button">
            <svg class="new-post__icon" width="22" height="22">
              <use href={`${sprite}#icon-photo`}></use>
            </svg>
            Photo/Video
          </button>
          <button class="new-post__btn" type="button">
            <svg class="new-post__icon" width="22" height="22">
              <use href={`${sprite}#icon-friend`}></use>
            </svg>
            Tag friends
          </button>
          <button class="new-post__btn" type="button">
            <svg class="new-post__icon" width="22" height="22">
              <use href={`${sprite}#icon-smile`}></use>
            </svg>
            Feeling/Activ...
          </button>
        </div>
      </div>
      <article class="user-content__post post">
        <div class="post__user user">
          <img src="img/user.png" class="user__photo" alt="User" width="48" height="48"></img>
          <div class="user__info">
            <a href="#d" class="user__name">Denis Vladimirov</a>
            <div class="user__set">
              <span class="user__span">3 hrs</span>
              <svg class="user__icon" width="20" height="20">
                <use href={`${sprite}#icon-setting`}></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="post__content">
          <p class="post__text">Did you know that all of this was made using only components and styles from Ant Desing System for Figma?</p>
          <img class="post__img" src="img/post-img.jpg" alt="post"></img>
        </div>
        <div class="post__likes">
            <svg class="post__likes-icon" width="16" height="16">
              <use href={`${sprite}#icon-like`}></use>
            </svg>
          <span class="post__likes-counter">23</span>
        </div>
        <div class="post__post-footer post-footer">
          <div class="post-footer__item">
            <button type="button" class="post-footer__btn">
              <svg class="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-like`}></use>
              </svg>
            </button>
            <span class="post-footer__text">Like</span>
          </div>
          <div class="post-footer__item">
            <button type="button" class="post-footer__btn">
              <svg class="post-footer__icon" width="19" height="19">
                <use href={`${sprite}#icon-message`}></use>
              </svg>
            </button>
            <span class="post-footer__text">Comment</span>
          </div>
          <div class="post-footer__item">
            <button type="button" class="post-footer__btn">
              <svg class="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-share`}></use>
              </svg>
            </button>
            <span class="post-footer__text">Share</span>
          </div>
        </div>
      </article>
      <article class="user-content__post post">
        <div class="post__user user">
          <img src="img/figma.jpg" class="user__photo" alt="User" width="48" height="48"></img>
          <div class="user__info">
            <a href="#f" class="user__name">Figma</a>
            <div class="user__set">
              <span class="user__span">6 hrs</span>
              <svg class="user__icon" width="20" height="20">
                <use href={`${sprite}#icon-setting`}></use>
              </svg>
            </div>
          </div>
        </div>
        <div class="post__content">
          <p class="post__text">
            📙 Want to implement type in your design system in Figma? This guide covers everything you should consider, from choosing the right typography scale to naming and organizing your text styles.
          </p>
        </div>
        <div class="post__likes">
            <svg class="post__likes-icon" width="16" height="16">
              <use href={`${sprite}#icon-like`}></use>
            </svg>
          <span class="post__likes-counter">43</span>
        </div>
        <div class="post__post-footer post-footer">
          <div class="post-footer__item">
            <button type="button" class="post-footer__btn">
              <svg class="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-like`}></use>
              </svg>
            </button>
            <span class="post-footer__text">Like</span>
          </div>
          <div class="post-footer__item">
            <button type="button" class="post-footer__btn">
              <svg class="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-message`}></use>
              </svg>
            </button>
            <span class="post-footer__text">Comment</span>
          </div>
          <div class="post-footer__item">
            <button type="button" class="post-footer__btn">
              <svg class="post-footer__icon" width="19" height="19">
              <use href={`${sprite}#icon-share`}></use>
              </svg>
            </button>
            <span class="post-footer__text">Share</span>
          </div>
        </div>
      </article>
    </section>    
    <section class="page-main__right-sidebar right-sidebar">
      <div class="right-sidebar__stories stories">
        <div class="stories__header">
          <h3 class="stories__title">Stories</h3>
          <a href="#d" class="stories__link">
            <svg class="stories__icon" width="16" height="16">
              <use href={`${sprite}#icon-clock`}></use>
            </svg>
            Archive
          </a>
          <a href="#d" class="stories__link">Settings</a>
        </div>
        <div class="stories__add">
          <img  class="stories__add-btn" src="img/add-stories.png" alt="add stories" width="48" height="48"></img>
          <div class="stories__add-box">
            <a href="#d" class="stories__add-link">Add to your story</a>
            <p class="stories__add-text">Share a photo or video or write something</p>
          </div>
        </div>
        <ul class="stories__list">
          <li class="stories__item">
            <img  class="stories__item-img" src="img/concuria.png" alt="concuria" width="48" height="48"></img>
            <div class="stories__item-box">
              <a href="#e" class="stories__item-link">Concuria</a>
              <p class="stories__item-text">4 hours ago</p>
            </div>
          </li>
          <li class="stories__item">
            <img  class="stories__item-img" src="img/figma.jpg" alt="figms" width="48" height="48"></img>
            <div class="stories__item-box">
              <a href="#e" class="stories__item-link">Figma</a>
              <p class="stories__item-text">6 hours ago</p>
            </div>
          </li>
          <li class="stories__item">
            <img  class="stories__item-img" src="img/ant-design.png" alt="Ant Design" width="48" height="48"></img>
            <div class="stories__item-box">
              <a href="#e" class="stories__item-link">Ant Design</a>
              <p class="stories__item-text">8 hours ago</p>
            </div>
          </li>
        </ul>
        <a href="#e" class="stories__link">See more...</a>
      </div>
      <div class="right-sidebar__birthday birthday">
        <svg class="birthday__icon" width="19" height="19">
          <use href={`${sprite}#icon-gift`}></use>
        </svg>
          <a href="#e" class="birthday__link">John Doe</a>
          <span class="birthday__span">’s birthday is today</span>
      </div>
    </section>         
    </main>
  )
};

export default Main;
