import React, { useContext } from 'react'
import CartContext from '../store/cart-context';

const Cart = (props) => {
    const crtCtx = useContext(CartContext);
    let quantity=0;
    crtCtx.items.forEach((item)=>{
        quantity= quantity + Number(item.quantity);
      })
  return (
    <div>
      <button onClick={props.show}>Cart {quantity}</button>
    </div>
  )
}

export default Cart
