import React from 'react';
import ReactDOM from 'react-dom';
import {TodoList} from './todo-list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getState();
  }

  getState() {
    return {
      items: [
        {name: 'Clean house', checked: false},
        {name: 'Earn money', checked: false},
        {name: 'Sleep', checked: false},
        {name: 'Repeat', checked: false},
        {name: '...', checked: false},
        {name: 'Profit?', checked: false}
      ]
    }
  }

  render() {
    return (
      <div>
        <TodoList items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('todo'));