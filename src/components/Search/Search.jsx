import { useState } from 'react'
import * as S from './Search.Styled'

const Search = ({
  searchHandler,
  submitHandler,
  writeSomethingHandler,
  totalFontFound,
}) => {
  const [searchText, setSearchText] = useState('')

  return (
    <S.Container>
      <S.FontCount>
        <span>{totalFontFound}</span>
        <span>{totalFontFound === 1 ? ' font found' : ' fonts found'}</span>
      </S.FontCount>
      <S.Form onSubmit={submitHandler}>
        <S.Input
          onChange={(event) => setSearchText(event.target.value)}
          type='text'
          placeholder='search fonts by name...'
          onKeyUp={(event) =>
            event.key === 'Enter' && searchHandler(searchText)
          }
        />
        <S.SearchBtn onClick={() => searchHandler(searchText)} type='submit'>
          search
        </S.SearchBtn>
      </S.Form>
      <S.CustomInput
        onKeyUp={writeSomethingHandler}
        type='text'
        placeholder='wirte something'
      ></S.CustomInput>
    
    </S.Container>
  )
}

export default Search
