import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Asosiy from './pages/Asosiy'
import BizHaqimizda from './pages/BizHaqimizda'
import Mahsulotlar from './pages/Mahsulotlar'
import Yangiliklar from './pages/Yangiliklar'
import Kareyra from './pages/Kareyra'
import Hamkorlik from './pages/Hamkorlik'
import Footer from './components/Footer'


function App() {

  const products = [
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },
    {
      img: "imgs/kapsula.png",
      name: "Argeta 100",
      price: "99 000uzs"
    },

  ]

return (
    <div className="App">
      <BrowserRouter>
      <Navbar products={products}/>
      <Routes>
        <Route path='/' element={<Asosiy products={products}/>}/>
        <Route path='/bizhaqimizda' element={<BizHaqimizda/>}/>
        <Route path='/mahsulotlar' element={<Mahsulotlar products={products}/>}/>
        <Route path='/yangiliklar' element={<Yangiliklar/>}/>
        <Route path='/kareyra' element={<Kareyra/>}/>
        <Route path='/hamkorlik' element={<Hamkorlik/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
