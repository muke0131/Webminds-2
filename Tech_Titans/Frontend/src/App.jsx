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

function App() {
  return (
    <BrowserRouter>
    <SideBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
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

export default App
