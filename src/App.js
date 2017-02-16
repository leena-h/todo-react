import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx'
import {TodoForm, TodoList, Footer} from './components/todo'
import {addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo} from './lib/todoHelpers'
import {pipe, partial} from './lib/utils'

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

  handleRemove = (id, evt) => {
    evt.preventDefault()
    const updatedTodos = removeTodo(this.state.todos, id)
    this.setState({
      todos: updatedTodos
    })
  }

  handleToggle = (id) => {
    const getUpdatedTodos = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = updateTodo(id, this.state.todos)
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
        <TodoList handleToggle={this.handleToggle} todos={this.state.todos} handleRemove={this.handleRemove} />
        <Footer />
      </div>
    );
  }
}

export default App;
