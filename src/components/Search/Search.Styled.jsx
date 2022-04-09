import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-template-columns:repeat(3,1fr);
  justify-items: center;
  width: 85%;
  gap: 3rem;
`

export const FontCount = styled.p`
  & span {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2962ff;
  }
`
export const Form = styled.form`
  display: flex;
`
export const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem 0 0 0.5rem;
  border: 1px solid #2962ff;
  border-right: none;
  outline: none;
  display: block;
  :focus {
    ::placeholder {
      color: #1565c0;
    }
  }
`

export const CustomInput = styled.input`
  border: none;
  border-bottom: 1px solid #2962ff;
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
      color: #1565c0;
    }
  }
`

export const SearchBtn = styled.button`
  background-color: #2962ff;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0 0.5rem 0.5rem 0;
`
