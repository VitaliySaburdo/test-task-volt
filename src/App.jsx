import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { ToDoForm } from './components/todo-form/todo-form'
import { Container } from './components/container/container'
import { Section } from './components/section/section'
import { useState } from 'react'
import { ToDoList } from './components/todo-list/todo-list'
function App() {
  const [tasks, setTasks] = useState([])

  const formSubmitHandler = ({ task }) => {
    setTasks([...tasks, task])
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <main>
          <Section>
            <Container>
              <ToDoForm onSubmit={formSubmitHandler}/>
              <ToDoList tasks={ tasks }/>
            </Container>
          </Section>
        </main>
      </ThemeProvider>
    </>
  )
}

export default App
