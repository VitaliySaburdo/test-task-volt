import { Item } from './todo-list.styled'
export const ToDoList = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks && tasks.map((task, index) => <Item key={index}>{task}</Item>)}
      </ul>
    </>
  )
}
