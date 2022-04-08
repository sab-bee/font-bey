import { useState } from 'react'
// import { ContainerFluid } from '../styles/element'
import {
  Input,
  CustomInput,
  SearchBtn,
  Styledform,
  Container,
} from './Styled.Search'

const Search = ({ searchHandler, submitHandler, writeSomethingHandler,isSearched }) => {
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
      <CustomInput
        onChange={writeSomethingHandler}
        type='text'
        placeholder='then wirte something'
        disabled = {!isSearched}
      ></CustomInput>
    </Container>
  )
}

export default Search
