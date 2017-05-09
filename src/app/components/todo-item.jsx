import React from 'react';

class TodoItem extends React.Component {
  render() {
    return <div>{this.props.name}</div>;
  }
}

export {TodoItem};