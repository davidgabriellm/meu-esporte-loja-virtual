
import './App.css'
import Footer from './components/footer/Index'
import Header from './components/header/Index'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
