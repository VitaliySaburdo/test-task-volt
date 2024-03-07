import Button from '@mui/material/Button'

export const MuiButton = ({ children, ...props }) => {
  return (
    <>
      <Button {...props}>{children}</Button>
    </>
  )
}
