import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  {Navbar} from'./components/Navbar'
import { Shop } from './pages/shop/Shop'
import { Cart } from './pages/cart/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
           <Route path='/shop' element={<Shop/>}/>
           <Route path="/products/:id" component={ProductDetail} />
           <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
      
  )
}

export default App
