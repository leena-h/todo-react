import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx'
import {TodoForm, TodoList} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodo} from './lib/todoHelpers'

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

  handleToggle = (id) => {
    const todo = findById(id, this.state.todos)
    const toggled = toggleTodo(todo)
    const updatedTodos = updateTodo(this.state.todos, toggled)
    this.setState({todos: updatedTodos})
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    const newId = generateId()
    const newTodo = { id: newId, name: this.state.currentTodo, isComplete: false }
    const updatedTodos = addTodo(this.state.todos, newTodo)
    this.setState({
      todos: updatedTodos,
      currentTodo: ''
    })
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
        <TodoForm handleInputChange={this.handleInputChange}
          currentTodo={this.state.currentTodo}
          handleSubmit={this.handleSubmit} />
        <TodoList handleToggle={this.handleToggle} todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
