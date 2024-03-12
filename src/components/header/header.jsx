import { AppBar, Grid, Toolbar } from '@mui/material'
import { StatusFilter } from '../status-filter/status-filter'
import { TaskCounter } from '../task-counter/task-counter'

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
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
      </AppBar>
    </header>
  )
}
