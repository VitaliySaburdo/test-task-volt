import { ThemeProvider } from 'styled-components'
import { theme } from './theme/theme'
import { ToDoForm } from './components/todo-form/todo-form'
import { Container } from './components/Container/container'
function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Container>
      <ToDoForm/>
      </Container>
      </ThemeProvider>
    </>
  )
}

export default App
