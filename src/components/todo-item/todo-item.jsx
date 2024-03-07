import { useDispatch } from 'react-redux'
import { deleteTask, toggleCompleted } from '../../redux/operations'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteTask(task.id))

  const handleToggle = () => dispatch(toggleCompleted(task))

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <p>{task.task}</p>
      <button onClick={handleDelete}>
        X
      </button>
    </div>
  )
}
