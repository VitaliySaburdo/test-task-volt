import { useSelector } from 'react-redux'
import { selectTasks } from '../../redux/selectors'

export const ToDoList = () => {
  const tasks = useSelector(selectTasks)
  console.log(tasks)
  return (
    <>
      <ul>
        {tasks.map((task) => <li key={task.id}>{task.task}</li>)}
      </ul>
    </>
  )
}
