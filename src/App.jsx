import {React} from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './Components/Header'
import About from './pages/About'
import Home from './pages/Home'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SingUp from './pages/SingUp'


export default function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/sign-in' element={<SignIn/>}></Route>
        <Route path='/sign-op' element={<SingUp/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>

      </Routes>
    </BrowserRouter>
  )
}
