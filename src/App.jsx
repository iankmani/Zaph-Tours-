// import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import ContactUs from './pages/contact Us/ContactUs'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
function App() {
  

  return (
    <>
     <BrowserRouter>
     <Header/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route/>
           <Route/> 
           <Route path="Contact Us" element={<ContactUs/>} /> 
           
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
