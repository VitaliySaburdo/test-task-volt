import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/operations'
import { Form, Container, Title, Input, Button } from './todo-form.styled'
export const ToDoForm = () => {
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    dispatch(addTask(event.target.elements.text.value))
    form.reset()
  }

  return (
    <>
      <Container>
        <Title>Create task</Title>
        <Form onSubmit={handleSubmit}>
          <Input type="text" name="text" placeholder="Enter task text..." />
          <Button>Add task</Button>
        </Form>
      </Container>
    </>
  )
}
