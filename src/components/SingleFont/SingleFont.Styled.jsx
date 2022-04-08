import styled from 'styled-components'

export const Container = styled.div`
  height: 456px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0px 1px 15px #e0e0e0;
`

export const CardBody = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  /* border: 1px solid #e0e0e0; */
`

export const TopPart = styled.div``
export const Family = styled.p`
  font-size: 20px;
  font-weight: 500;
`
export const Category = styled.p`
  font-size: 16px;
`

export const MiddlePart = styled.div``
export const Demo = styled.p`
  font-size: 1.5rem;
  text-align: center;
`

export const BottomPart = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;

  & button {
    background-color: transparent;
    font-size: 20px;
    padding: 0.5rem;
    border-radius: 0.5rem;
    :hover {
      background-color: #e0e0e0;
    }
  }
`
const SemiBoldBtn = styled.button`
  font-weight: 600;
`
const MediumBtn = styled.button`
  font-weight: 500;
`
const RegularBtn = styled.button`
  font-weight: 400;
`
const LightBtn = styled.button`
  font-weight: 300;
`

export { MediumBtn, SemiBoldBtn, RegularBtn, LightBtn }

export const ButtonBody = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  & button {
    padding: 1rem;
    outline: 1px solid #ececec;
    background-color: #ffffff;
    font-weight: 600;
    color: #31333e;

    :hover {
      background-color: #31333e;
      color: #fafafa;
    }
  }
`
