import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Navbar from './components/Navbar'
import MyRouter from './react-router/MyRouter'
import MyRoutes from './react-router/MyRoutes'
import Error from './components/Error'
import MyBrowserRouter from './react-router/MyBrowserRouter'
import UserDetails from './components/User'

function App() {
 
  return <>
  <MyBrowserRouter>
  <Navbar/>
    <MyRouter>
    <MyRoutes  element={<Home/>} path='/'></MyRoutes>
    <MyRoutes  element={<Contact/>} path='/contact'></MyRoutes>
    <MyRoutes  element={<About/>} path='/about'></MyRoutes>
    <MyRoutes  element={<UserDetails/>} path='/user:id'></MyRoutes>
    <MyRoutes  element={<About data='explore'/>} path='/explore'></MyRoutes>
    <MyRoutes  element={<Error/>} path='*'></MyRoutes>
  </MyRouter>
  </MyBrowserRouter>
  </>
}

export default App
