import React, { useContext } from "react";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../context/shop-context";
import CartItem from "../../components/CartItem/CartItem"
export const Cart = () =>{
    const {cartItems} = useContext(ShopContext)

    return <div>
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product)=>{
                if(cartItems[product.id] !== 0){
                    return <CartItem data={product} />
                }
            })}
        </div>
    </div>
}
export default Cart;