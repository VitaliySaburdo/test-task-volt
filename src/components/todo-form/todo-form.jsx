import { useState } from 'react'
import {
  Form,
  Label,
  Container,
  Title,
  Input,
  Button,
} from './todo-form.styled'
export const ToDoForm = () => {
  const [task, setTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    // onSubmit({ task })
    resetForm()
  }

  const handleNameChange = (event) => {
    setTask(event.target.value)
  }

  const resetForm = () => {
    setTask('')
  }

  return (
    <>
      <Container>
        <Title>Create task</Title>
        <Form onSubmit={handleSubmit}>
          <Label>
            <Input
              type="text"
              name="task"
              value={task}
              onChange={handleNameChange}
            />
          </Label>
          <Button>Add task</Button>
        </Form>
      </Container>
    </>
  )
}
