import React from 'react';
import './user-block.css';

const UserBlock = ({ avatar, name, children }) => (
  <div className="user-block">
    <div className="user-info">
      <div className="user-info__avatar">{avatar}</div>
      <div className="user-info__name">{name}</div>
      {children}
    </div>
  </div>
);

export default UserBlock;