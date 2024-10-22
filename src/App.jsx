import React from 'react'
import "./App.css"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Produtos from './components/Produtos'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Contato from "./components/Contato"
import Produto from "./components/Produto"
import NotFound from './components/NotFound'

const App = () => {
  return (
    <BrowserRouter>
    <div className='App'>
      <div className='content'>
        <Header />
      <Routes>
        <Route path='/' element={<Produtos/>}></Route>
        <Route path="produto/:id" element={<Produto/>}></Route>
        <Route path='contato' element={<Contato/>}></Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App