import { useSelector, useDispatch } from 'react-redux'
import { statusFilters } from '../../redux/constants'
import { selectStatusFilter } from '../../redux/selectors'
import { setStatusFilter } from '../../redux/filter-slice'
import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectStatusFilter)

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter))

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <Typography variant="h6">Filter by status</Typography>
      <div style={{ display: 'flex' }}>
        <ButtonGroup variant="contained" aria-label="Basic button group">
          <Button
            selected={filter === statusFilters.all}
            onClick={() => handleFilterChange(statusFilters.all)}
          >
            All
          </Button>
          <Button
            selected={filter === statusFilters.active}
            onClick={() => handleFilterChange(statusFilters.active)}
          >
            Active
          </Button>
          <Button
            selected={filter === statusFilters.completed}
            onClick={() => handleFilterChange(statusFilters.completed)}
          >
            Completed
          </Button>
        </ButtonGroup>
      </div>
    </Box>
  )
}
