import { AppBar, Toolbar, Typography } from '@mui/material'
import { StatusFilter } from '../status-filter/status-filter'
import { TaskCounter } from '../task-counter/task-counter'

export const Header = () => {
  return (
    <header>
      <AppBar>
        <Toolbar>
          <Typography>Tasks</Typography>
          <TaskCounter />
          <h2>Filter by status</h2>
          <StatusFilter />
        </Toolbar>
      </AppBar>
    </header>
  )
}
