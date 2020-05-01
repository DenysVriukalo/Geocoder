import React from 'react';
import { StoryListItem } from '../'
import { SlideButton } from '../'
import './story-list.css';

const StoryList = ({ bgColor, listItems }) => {
  return (
    <div
      className={`story-list 
        ${bgColor ? 'story-list__' + bgColor : ''}
      `}
    >
      <SlideButton
        key='sl-btn-left'
        duration='left'
        size='small'
        color='blue'
        onClick={() => console.log('slide-left clicked')}
      />

      <ul className="story-list-content">
        {
          listItems.map(item =>
            <StoryListItem
              item={item}
              key={item.id}
              // onClick={onStoryListItemClick}
            />
          )
        }
      </ul>

      <SlideButton
        key='sl-btn-right'
        duration='right'
        size='small'
        color='blue'
        onClick={() => console.log('slide-right clicked')}
      />
    </div>
  );

}

export default StoryList;