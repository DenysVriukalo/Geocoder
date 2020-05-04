import React from 'react';
import { HistoryListItem } from '../'
import { SlideButton } from '../'
import './history-list.css';

const HistoryList = ({ bgColor, listItems }) => {
  return (
    <div
      className={`history-list 
        ${bgColor ? 'history-list__' + bgColor : ''}
      `}
    >
      <SlideButton
        key='sl-btn-left'
        duration='left'
        size='small'
        color='blue'
        onClick={() => console.log('slide-left clicked')}
      />

      <ul className="history-list-content">
        {
          listItems.map(item =>
            <HistoryListItem
              item={item}
              key={item.id}
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

export default HistoryList;