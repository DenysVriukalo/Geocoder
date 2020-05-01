import React from 'react';
import './story-list-item.css';

const StoryListItem = ({item}) => (
  <li className="story-list-item">
    {item.name}
  </li>
);

export default StoryListItem;