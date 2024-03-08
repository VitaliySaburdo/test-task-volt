import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/operations'
import { Form, Container, Input } from './todo-form.styled'
import { Title } from '../title/title'
import { MuiButton } from '../button/button'
import { TextField } from '@mui/material'
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
          <TextField
            type="text"
            name="text"
            label="Enter task text..."
            size="small"
            fullWidth
          />
          <div style={{ textAlign: 'center' }}>
            <MuiButton type="submit" variant="contained" sx={{ mt: 2 }}>
              Add task
            </MuiButton>
          </div>
        </Form>
      </Container>
    </>
  )
}
