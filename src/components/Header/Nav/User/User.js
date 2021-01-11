import React from 'react';
import './User.css';

const User = (props) => {
  return (
    <div className="main-nav__user user">
      <img
        src="img/user.png"
        className="user__photo"
        alt="User"
        width="32"
        height="32"
      />
      <a href="#d" className="user__name">
        {props.firstName} {props.SecondName}
      </a>
    </div>
  );
};

export default User;
