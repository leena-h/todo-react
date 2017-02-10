import React, { Component } from 'react';
import './App.css';

import Header from './Header.jsx'
import {TodoForm, TodoList} from './components/todo'

class App extends Component {

  // ES2016 property initializer syntax
  state = {
    todos: [
      {id: 1, name: 'Learn about components', isComplete: true},
      {id: 2, name: 'Learn about routers', isComplete: false},
      {id: 3, name: 'Build an amazing app', isComplete: false}
    ],
    currentTodo: ''
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
  }

  handleEmptySubmit = (evt) => {
    evt.preventDefault()
  }

  handleInputChange = (evt) => {
    this.setState({
      currentTodo: evt.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <TodoForm handleInputChange={this.handleInputChange} currentTodo={this.state.currentTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
