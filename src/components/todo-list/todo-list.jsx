import { useSelector } from 'react-redux'
import { selectTasks } from '../../redux/selectors'

export const ToDoList = () => {
  const tasks = useSelector(selectTasks)
  return (
    <>
      <ul>
        {tasks.map((task, index) => <li key={index}>{task.task}</li>)}
      </ul>
    </>
  )
}
