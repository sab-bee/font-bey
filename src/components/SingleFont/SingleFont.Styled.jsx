import styled from 'styled-components'

export const Card = styled.div`
  min-height: 456px;
  background-color: #f7f7f8;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  outline: 4px solid transparent;
  transition: 0.2s ease;
  /* box-shadow: 0px 1px 15px #e0e0e0; */
  :hover {
    background-color: #1e88e5;
    color: white;
    outline-color: #bbdefb;
  }
`

export const CardBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

export const TopPart = styled.div``
export const FamilyTitle = styled.p`
  font-size: 20px;
  font-weight: 500;
`
export const CategoryTitle = styled.p`
  font-size: 16px;
`

export const MiddleGroup = styled.div``
export const DemoTitle = styled.p`
  font-size: 2rem;
  text-align: center;
`

export const BottomGroup = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  & button {
    background-color: transparent;
    font-size: 20px;
    padding: 0.5rem;
    border-radius: 0.5rem;

    ${Card}:hover & {
      color: white;
      :hover {
        background-color: #82b1ff;
      }
    }

    :hover {
      background-color: #d1c4e9;
      color: #424242;
    }
  }
`

export const FontWeightButton = styled.button`
  & p {
    font-weight: ${({ fw }) => fw};
  }
`
export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & button {
    padding: 1rem;
    outline: 2px solid #ececec;
    background-color: #f7f7f8;
    color: #8E919C;
    font-weight: 600;

    ${Card}:hover & {
      outline-color: #90caf9;
      /* background-color: #5e35b1; */
      color: #1e88e5;
      :hover {
        background-color: #1e88e5;
        color: white;
      }
    }
  }
`
