
import { useContext } from 'react'
import './App.css'
import Board from './component/Board/Board'
import Navbar from './component/Navbar/Navbar'


function App() {
     
  return (
  <div className='App'>
      <Navbar/>
        <div className='container'>
        <Board/>
        </div>
 
  </ div>   
  )
}

export default App
