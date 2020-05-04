import React from 'react';
import './history-list-item.css';

const HistoryListItem = ({item}) => (
  <li className="history-list-item">
    {item.name}
  </li>
);

export default HistoryListItem;