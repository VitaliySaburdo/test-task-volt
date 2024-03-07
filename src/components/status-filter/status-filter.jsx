import { useSelector, useDispatch } from 'react-redux'
import { statusFilters } from '../../redux/constants'
import { selectStatusFilter } from '../../redux/selectors'
import { setStatusFilter } from '../../redux/filter-slice'

export const StatusFilter = () => {
  const dispatch = useDispatch()
  const filter = useSelector(selectStatusFilter)

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter))

  return (
    <div>
      <button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </button>
      <button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </button>
      <button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </button>
    </div>
  )
}
