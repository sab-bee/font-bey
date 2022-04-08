import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Display, Header, Home, SansSerif, Serif } from './components'

function App() {
  return (
    <div className='App'>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/sans-serif' element={<SansSerif></SansSerif>}></Route>
        <Route path='/serif' element={<Serif></Serif>}></Route>
        <Route path='/display' element={<Display></Display>}></Route>
      </Routes>
    </div>
  )
}

export default App
