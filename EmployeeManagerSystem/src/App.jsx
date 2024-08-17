import './App.css'
import ListComponent from './components/ListComponent'
import EmployeeComponent from './components/EmployeeComponent'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { HeaderComponent } from './components/HeaderComponent'
import { FooterComponent } from './components/FooterComponent'

function App() {

  return (
    <>
    <HeaderComponent/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = { <ListComponent/>}></Route>
      <Route path='/employees' element = { <ListComponent/>}></Route>
      <Route path='/add-employee' element = { <EmployeeComponent/>}></Route>
      <Route path='/edit-employee/:id' element = { <EmployeeComponent/>}></Route>
    </Routes>
    </BrowserRouter>
    <FooterComponent/>
    </>
  )
}

export default App
