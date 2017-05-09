import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './todo-list.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('todo'));