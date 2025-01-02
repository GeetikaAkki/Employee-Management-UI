import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListEmployeeComponent from './components/ListEmployeeComponent'
import HeaderComponent from './components/HeaderComponent'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <HeaderComponent/>
    <Routes>
      <Route path='/' element={<ListEmployeeComponent/>} ></Route>
      <Route path='/employees' element={<ListEmployeeComponent/>}></Route>
      <Route path='/add-employee' element={<EmployeeComponent/>}></Route>

    </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
