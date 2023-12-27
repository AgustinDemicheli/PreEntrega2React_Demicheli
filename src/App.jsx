import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  {Navbar} from'./components/Navbar/Navbar'
import { ItemListContainer } from './pages/ItemListContainer/ItemListContainer'
import { Cart } from './pages/cart/Cart'
import { ErrorPage } from './pages/errorpage/ErrorPage'
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer'
const  App = ()=> {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/shop" element={<ItemListContainer/>}/>
          <Route path="/cart"element={<Cart/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
      
  )
}

export default App
