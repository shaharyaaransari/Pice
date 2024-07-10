
import { useContext } from 'react'
import './App.css'
import Board from './component/Board/Board'
import { AppContext } from './context/Context'

function App() {
     
  return (
  <div className='App'>
  <Board/>
  </ div>   
  )
}

export default App
