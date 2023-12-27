import { dividerClasses } from "@mui/material";
import React from "react";
import { ShoppingCart } from "phosphor-react";


export const CartWidget = () => {
    return (
    <div >
        <ShoppingCart size={23}/>
    </div>
    )
}

export default CartWidget;