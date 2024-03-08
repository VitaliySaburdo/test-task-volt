import { FallingLines } from 'react-loader-spinner'
import { LoaderContainer } from './loader.styled'

export const Loader = () => {
  return (
    <LoaderContainer>
<FallingLines
  color="#4fa94d"
  width="100"
  visible={true}
  ariaLabel="falling-circles-loading"
  />
    </LoaderContainer>
  )
}
