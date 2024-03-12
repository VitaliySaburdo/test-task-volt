import { AppBar, Grid, Toolbar } from '@mui/material'
import { StatusFilter } from '../status-filter/status-filter'
import { TaskCounter } from '../task-counter/task-counter'
import { Container } from '../container/container'

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Container>
        <Toolbar>
          <Grid container justifyContent="space-between">
            <Grid item>
              <TaskCounter />
            </Grid>
            <Grid item>
              <StatusFilter />
            </Grid>
          </Grid>
          </Toolbar>
          </Container>
      </AppBar>
    </header>
  )
}
