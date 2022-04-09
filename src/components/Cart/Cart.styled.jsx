import styled from 'styled-components'

export const Cart = styled.div`
  position: absolute;
  height: 95vh;
  width: 20%;
  position: fixed;
  top: 5.05rem;
  right:0;
  background-color: #F8FAFC;
  & div {
    height: 85vh;
    position: relative;
  }
 
`

export const Title = styled.p`
    margin: 4rem 0;
    text-align: center;
    color:#899bff;
    font-size:1.25rem;
`

export const ItemGroup = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  border-bottom : 2px solid #ECECEC;
  padding: 0 2rem;
  margin: .5rem 0;
`
export const Item = styled.p`
  padding: 1rem;
`

export const RemoveBtn = styled.button`
  padding: 1rem;
  border-radius:.3rem;
  background-color: #dee8ff;
`

export const CopyAllBtn = styled.button`
  position: absolute;
  bottom: 0;
  background-color: #1e88e5;
  right:0;
  color:white;
  width:100%;
  padding: 1rem;
  :hover {
    background-color: #1976D2;
  }
`