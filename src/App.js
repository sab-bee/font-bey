import { Route, Routes } from 'react-router-dom'
import * as Com from './components'
import NotFound from './components/NotFound/NotFound'
import { GlobalStyle } from './Theme/GlobalStyle'

function App() {
  return (
    <>
      <GlobalStyle />

      <Com.Header></Com.Header>
      <Routes>
        <Route path='/' element={<Com.Home></Com.Home>}></Route>
        <Route
          path='/sans-serif'
          element={<Com.SansSerif></Com.SansSerif>}
        ></Route>
        <Route path='/serif' element={<Com.Serif></Com.Serif>}></Route>
        <Route path='/monospace' element={<Com.MonoSpace></Com.MonoSpace>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}

export default App
