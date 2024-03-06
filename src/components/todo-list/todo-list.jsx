export const ToDoList = ({ tasks }) => {
  return (
    <>
      <ul>
        {tasks && tasks.map((task, index) => <li key={index}>{task}</li>)}
      </ul>
    </>
  )
}
