import React from 'react'
import {partial} from '../../lib/utils'

export const TodoItem = (props) => {
  const handleToggle = partial(props.handleToggle, props.id)
  const handleRemove = partial(props.handleRemove, props.id)
  return (
    <li>
      <a href="#" onClick={handleRemove}>X</a>
      <input type="checkbox" onChange={handleToggle}
      checked={props.isComplete}/> {props.name}
    </li>
  )
}

TodoItem.propTypes = {
  isComplete: React.PropTypes.bool.isRequired,
  name: React.PropTypes.string.isRequired
}
