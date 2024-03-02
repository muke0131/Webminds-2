

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import SendMoney from './Pages/SendMoney'
import ReceiveMoney from './Pages/ReceiveMoney'
import AddAccount from './Pages/AddAccount'
import Contact from './Pages/Contact'
import Support from './Pages/Support'
import Service from './Pages/Service'
import Security from './Pages/Security'
import Statement from './Pages/Statement'
import SideBar from './components/SideBar'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  const isLoginPage = window.location.pathname === '/' || window.location.pathname === '/signup';

  return (
    <BrowserRouter>
      {!isLoginPage && <SideBar/>}
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/Dashboard' element={<Home/>}/>
        <Route path='/send-money' element={<SendMoney/>}/>
        <Route path='/receive-money' element={<ReceiveMoney/>}/>
        <Route path='/add-account' element={<AddAccount/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/support' element={<Support/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/security' element={<Security/>}/>
        <Route path='/statement' element={<Statement/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
