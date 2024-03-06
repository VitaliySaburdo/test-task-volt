/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  Form,
  Container,
  Title,
  Input,
  Button,
} from './todo-form.styled'
export const ToDoForm = ({ onSubmit }) => {
  const [task, setTask] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ task })
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
            <Input
              type="text"
              name="task"
              value={task}
              onChange={handleNameChange}
            />
          <Button>Add task</Button>
        </Form>
      </Container>
    </>
  )
}
