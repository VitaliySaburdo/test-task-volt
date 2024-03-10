import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;
  &:last-child {
    margin-bottom: 0;
  }
`
export const Text = styled.p`
  min-width: 420px;
  margin-left: 20px;
  font-size: 18px;
`
