import { useDispatch } from 'react-redux'
import { deleteTask, toggleCompleted } from '../../redux/operations'
import { Item } from './todo-item.styled'
import { MuiButton } from '../button/button'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'

export const Task = ({ task }) => {
  const dispatch = useDispatch()

  const handleDelete = () => dispatch(deleteTask(task.id))

  const handleToggle = () => dispatch(toggleCompleted(task))

  return (
    <Item>
      <Checkbox
        checked={task.completed}
        onChange={handleToggle}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
      />
      <p>{task.text}</p>
      <MuiButton
        color="error"
        startIcon={<DeleteIcon />}
        onClick={handleDelete}
      >
        Delete
      </MuiButton>
    </Item>
  )
}
