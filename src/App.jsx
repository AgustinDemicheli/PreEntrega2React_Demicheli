import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  {Navbar} from'./components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { Cart } from './pages/cart/Cart'
import { ErrorPage } from './pages/errorpage/ErrorPage'
import Item from './components/ItemListContainer/Item/Item'

const  App = ()=> {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/'/>
           <Route path='/shop' element={<ItemListContainer/>}/>
           <Route path="/products/:id" component={Item} />
           <Route path='/*' element={<ErrorPage/>}/>
           <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
      
  )
}

export default App
