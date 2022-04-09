import { useState } from 'react'
import * as S from './Search.Styled'

const Search = ({ searchHandler, submitHandler, writeSomethingHandler }) => {
  const [searchText, setSearchText] = useState('')

  return (
    <S.Container>
      <S.Form onSubmit={submitHandler}>
        <S.Input
          onBlur={(event) => setSearchText(event.target.value)}
          type='text'
          placeholder='search fonts by name...'
        />
        <S.SearchBtn onClick={() => searchHandler(searchText)} type='submit'>
          search
        </S.SearchBtn>
      </S.Form>
      <S.CustomInput
        onChange={writeSomethingHandler}
        type='text'
        placeholder='wirte something'
      ></S.CustomInput>
    </S.Container>
  )
}

export default Search
