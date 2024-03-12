import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectError, selectIsLoading } from './redux/selectors'
import { fetchTasks } from './redux/operations'
import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { ToDoForm } from './components/todo-form/todo-form'
import { Section } from './components/section/section'
import { ToDoList } from './components/todo-list/todo-list'
import { Header } from './components/header/header'
import { Loader } from './components/loader/loader'

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
        <Header/>
        <main>
          <Section>
            <>
              <h1 style={{ 'textAlign': 'center' }}>TODO APP</h1>
              <ToDoForm />
              {isLoading && !error && <Loader/>}
              <ToDoList />
            </>
          </Section>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
