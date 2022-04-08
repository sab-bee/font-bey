import styled from 'styled-components'

export const FontsContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6rem;
  width: 85%;

  @media screen and (max-width: 1280px) {
  grid-template-columns: repeat(2, 1fr);

  }
`
