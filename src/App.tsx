
import './App.css'
import Footer from './components/footer/Index'
import Header from './components/header/Index'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (
    <>
    {/* <div className='flex justify-center items-center flex-col w-3xl'> */}
      <Header/>
      <Outlet/>
      <Footer/>
    {/* </div> */}
    </>
  )
}

export default App
