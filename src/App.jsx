import { Outlet } from 'react-router-dom'
import './App.css'
import Menu from './components/Menu'
import Rodape from './components/Rodape'
import Cabecalho from './components/Cabecalho'

function App() {
 

  return (
    <>
      <Cabecalho/>
      <Menu/>
      <Outlet/>
      <Rodape/>
    </>
  )
}

export default App
