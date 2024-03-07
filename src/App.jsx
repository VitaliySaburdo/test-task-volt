import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectIsLoading } from './redux/selectors'
import { fetchTasks } from './redux/operations'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { ToDoForm } from './components/todo-form/todo-form'
import { Container } from './components/container/container'
import { Section } from './components/section/section'
import { ToDoList } from './components/todo-list/todo-list'
function App() {
  const dispatch = useDispatch()
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <Section>
            <Container>
              <ToDoForm />
              {isLoading && !error && <b>Request in progress...</b>}
              <ToDoList />
            </Container>
          </Section>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
