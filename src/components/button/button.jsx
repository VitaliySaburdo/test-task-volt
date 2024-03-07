import {StyledButton} from './button.styled';

export const MuiButton = ({ children, ...props }) => {
  return (
    <>
      <StyledButton {...props}>{children}</StyledButton>
    </>
  )
}
