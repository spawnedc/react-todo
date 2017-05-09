import React from 'react';
import {TodoItem} from './todo-item.jsx';

class TodoList extends React.Component {
  render() {
    const listItems = this.props.items.map((item) => {
      return <li key={item.name}><TodoItem name={item.name}></TodoItem></li>;
    });
    return (
      <ul>
        {listItems}
      </ul>
    );
  }
}

export {TodoList};