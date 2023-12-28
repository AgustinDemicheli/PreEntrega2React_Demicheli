import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import  {Navbar} from'./components/Navbar/Navbar'
import { Cart } from './pages/cart/Cart'
import {Shop} from './pages/shop/Shop'
import { ErrorPage } from './pages/errorpage/ErrorPage'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './pages/ItemDetailContainer/ItemDetailContainer'


const  App = ()=> {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/cart"element={<Cart/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
          <Route path="/category/:IDCATEGORIA" element={<ItemListContainer />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </Router>
    </div>
      
  )
}

export default App
