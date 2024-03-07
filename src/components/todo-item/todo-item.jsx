import { useDispatch } from 'react-redux'
import { deleteTask, toggleCompleted } from '../../redux/operations'
import { Item } from './todo-item.styled'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteTask(task.id))

  const handleToggle = () => dispatch(toggleCompleted(task))

  return (
    <Item>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <p>{task.text}</p>
      <button onClick={handleDelete}>X</button>
    </Item>
  )
}
