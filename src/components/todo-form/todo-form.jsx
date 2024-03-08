import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { addTask } from '../../redux/operations'
import { Container } from './todo-form.styled'
import { Title } from '../title/title'
import { MuiButton } from '../button/button'
import { TextField } from '@mui/material'

export const ToDoForm = () => {
  const dispatch = useDispatch()

  const validationSchema = yup.object({
    text: yup
      .string()
      .required('Text is required')
      .min(6, 'Text should be of minimum 6 characters length')
      .max(20, 'Text should be of maximum 30 characters length'),
  })

  const initialValues = {
    text: '',
  }

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addTask(values.text))
    resetForm()
  }

  return (
    <Container>
      <Title>Create task</Title>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ dirty, isValid }) => (
          <Form>
            <Field
              as={TextField}
              type="text"
              name="text"
              label="Enter task text..."
              size="small"
              fullWidth
              sx={{ width: '400px' }}
              error={dirty && !isValid}
            />
            <ErrorMessage
              name="text"
              component="div"
              style={{ textAlign: 'center', color: 'red', fontSize: '12px' }}
            />
            <div style={{ textAlign: 'center' }}>
              <MuiButton
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
                disabled={!dirty || !isValid}
              >
                Add task
              </MuiButton>
            </div>
          </Form>
        )}
      </Formik>
    </Container>
  )
}
