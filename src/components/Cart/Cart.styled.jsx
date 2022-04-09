import styled from 'styled-components'

export const Cart = styled.div`
  position: absolute;
  height: 100vh;
  width: 20%;
  position: fixed;
  top: 5.05rem;
  right: 0;
  background-color: #f8fafc;
`

export const Container = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Empty = styled.p`
  font-size: 2rem;
  color: #90CAF9;
  text-align: center;
`

export const Title = styled.p`
  margin: 4rem 0;
  text-align: center;
  color: #1e88e5;
  font-size: 1.25rem;
`

export const ItemGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #ececec;
  margin: 0.5rem;
`
export const Item = styled.p`
  padding: 1rem;
`

export const RemoveBtn = styled.button`
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: #dee8ff;
  :hover {
    background-color : #EF5350;
    color:white;
  }
`

export const CopyAllBtn = styled.button`
  background-color: #2962ff;
  color: white;
  width: 100%;
  padding: 1rem;
  :hover {
    background-color: #1976d2;
  }
`
