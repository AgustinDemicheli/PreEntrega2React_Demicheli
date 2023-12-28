import React from 'react'
import Item from '../Item/Item';
export const CartItem = (product) => {
  return (
    <div className='cart-item'>
        <Item product={product}/>
    </div>
  )
}

export default CartItem;