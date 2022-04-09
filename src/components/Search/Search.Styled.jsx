import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
`
export const Form = styled.form`
  display: flex;
`
export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 1px solid #2962FF;
  border-right: none;
  outline: none;
  display: block;
  :focus {
    ::placeholder{
      color:#1565C0;
    }
  }
`

export const CustomInput = styled.input`
  border: none;
  border-bottom: 1px solid #2962FF;
  background-color: transparent;
  outline: none;
  transition: 0.2s ease;

  :disabled {
    border-color: #bebebe;
    ::placeholder {
      color: #bebebe;
    }
  }
  :focus {
    ::placeholder {
      color: #1565C0;
    }
  }
`

export const SearchBtn = styled.button`
  background-color: #2962FF;
  color:white;
  padding: 0.5rem 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
`
