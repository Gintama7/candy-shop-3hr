import React, { useContext } from 'react'
import ItemsContext from '../store/items-context'
import CartContext from '../store/cart-context';

const CandyList = () => {

    const itemCtx = useContext(ItemsContext);
  const cartCtx = useContext(CartContext);
    const buyHandler=(item)=>{
      console.log(item);
      cartCtx.addItem(item);
    }
  return (
    <div>
     {itemCtx.items.map((item)=>(
        <li>{item.name} {item.desc} {item.price} <button onClick={()=>buyHandler(item)}>Buy One</button><button>Buy Two</button><button>Buy Three</button></li>
     ))}
    </div>
  )
}

export default CandyList
