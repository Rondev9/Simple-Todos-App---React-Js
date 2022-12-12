import './index.css'

const TodoItem = props => {
  const {eachTodo, DeleteTodo} = props
  const {title, id} = eachTodo
  const onDelete = () => {
    DeleteTodo(id)
  }
  return (
    <li className="TodoContainer">
      <div className="todoNameContainer">
        <p className="todoName">{title}</p>
      </div>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
