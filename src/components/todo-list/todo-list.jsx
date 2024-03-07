import { useSelector } from 'react-redux'
import { selectTasks } from '../../redux/selectors'
import { Task } from '../todo-item/todo-item'
export const ToDoList = () => {
  const tasks = useSelector(selectTasks)
  return (
    <>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  )
}
