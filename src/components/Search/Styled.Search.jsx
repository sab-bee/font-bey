import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 6rem;
  display:flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center; */
  gap:3rem;

`
export const Styledform = styled.form`
  display: flex;
  
`
export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 2px solid #bdbdbd;
  border-right: none;
  outline: none;
  display: block;
`

export const CustomInput = styled.input`
  border: none;
  border-bottom:2px solid #bdbdbd;
  background-color: transparent;
  outline:none;
`

export const SearchBtn = styled.button`
  /* background-color: red; */
  /* position: absolute; */
  padding: 0.5rem 1rem;
  /* right:0; */
  border: 2px solid #bdbdbd;
  border-radius: 0 0.5rem 0.5rem 0;
`
