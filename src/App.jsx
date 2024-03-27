import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cronometraje from './views/Cronometraje.jsx'
import Inicio from './views/Inicio.jsx'
import CuentaAtras from './views/CuentaAtras.jsx'

function App() {
  return (
    <Router>
      <main className='bg-black h-screen w-screen box-border'>
        <Routes>
          <Route path='/' element={ <Inicio /> }></Route>
          <Route path='/cronometro' element={<Cronometraje />}></Route>
          <Route path='/temporizador' element={<CuentaAtras />}></Route>
        </Routes>
      </main>
    </Router>
  )
}

export default App