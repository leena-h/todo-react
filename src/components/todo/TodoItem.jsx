import React from 'react'

export const TodoItem = (props) => {
  return (
    <li>
      <input type="checkbox" defaultChecked={props.isComplete}/>{props.name}
    </li>
  )
}

TodoItem.propTypes = {
  isComplete: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired
}
