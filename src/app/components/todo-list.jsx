import React from 'react';
import {TodoItem} from './todo-item.jsx';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <li><TodoItem /></li>
        <li><TodoItem /></li>
        <li><TodoItem /></li>
        <li><TodoItem /></li>
      </ul>
    );
  }
}

export {TodoList};