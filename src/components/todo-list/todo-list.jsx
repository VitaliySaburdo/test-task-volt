import { useSelector } from 'react-redux'
import { selectVisibleTasks } from '../../redux/selectors'
import { Task } from '../todo-item/todo-item'
import { List } from './todo-list.styled'
export const ToDoList = () => {
  const tasks = useSelector(selectVisibleTasks)
  return (
    <>
      <List>
        {tasks.map((task, index) => (
          <li key={index}>
            <Task task={task} />
          </li>
        ))}
      </List>
    </>
  )
}
