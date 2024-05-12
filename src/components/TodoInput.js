// TodoItem.js

import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      <span>{todo}</span>
      <button className="delete-button" onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
