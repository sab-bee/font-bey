import { useState } from 'react'
// import { ContainerFluid } from '../styles/element'
import { Input, SearchBtn,Styledform,Container } from './Styled.Search'

const Search = ({ searchHandler, submitHandler }) => {
  const [searchText, setSearchText] = useState('')

  return (
    <Container>
      <Styledform onSubmit={submitHandler}>
        <Input
          onBlur={(event) => setSearchText(event.target.value)}
          type='text'
          placeholder='search fonts by name...'
        />
        <SearchBtn onClick={() => searchHandler(searchText)} type='submit'>
          search
        </SearchBtn>
      </Styledform>
    </Container>
  )
}

export default Search
