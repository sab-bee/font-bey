import { ContainerFluid } from '../styles/element'
import { Input } from './Styled.Search'

const Search = ({ searchHandler }) => {
  return (
    <ContainerFluid width='50%' flex mt='6rem'>
      <Input onBlur={searchHandler} type='text' placeholder='search fonts...'/>
    </ContainerFluid>
  )
}

export default Search
