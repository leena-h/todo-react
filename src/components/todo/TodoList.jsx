import React from 'react';

export const TodoList = (props) => {
  return (
    <div className="Todo-List">
      <ul>
        {props.todos.map(todo =>
          <li key={todo.id}>
            <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
          </li>)}
      </ul>
    </div>
  )
}

TodoList.propTypes = {
  todos: React.PropTypes.array.isRequired,
  todo: React.PropTypes.object
}
