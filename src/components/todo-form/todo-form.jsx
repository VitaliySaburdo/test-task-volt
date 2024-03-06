// import { useState } from 'react'
import {
  Form,
  Label,
  Container,
  Title,
  Input,
  Button,
} from './todo-form.styled'
export const ToDoForm = () => {
  // const [name, setName] = useState('')
  return (
    <>
      <Container>
        <Title>Create task</Title>
        <Form>
          <Label>
            <Input />
          </Label>
          <Button>Add task</Button>
        </Form>
      </Container>
    </>
  )
}
