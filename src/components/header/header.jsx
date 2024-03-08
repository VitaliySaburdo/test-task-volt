import { AppBar, Grid, Toolbar, Typography } from '@mui/material'
import { StatusFilter } from '../status-filter/status-filter'
import { TaskCounter } from '../task-counter/task-counter'

export const Header = () => {
  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <Typography variant="h6">Tasks counter</Typography>
              <TaskCounter />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="h6">Filter by status</Typography>
              <StatusFilter />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </header>
  )
}
