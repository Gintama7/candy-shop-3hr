
import { useContext, useEffect, useState } from 'react';
import './App.css';
import CandyForm from './components/CandyForm';
import CandyList from './components/CandyList';
import Cart from './components/Cart';
import CartItems from './components/CartItems';
import axios from 'axios';
import ItemsContext from './store/items-context';

function App() {
const itmCtx = useContext(ItemsContext); 
  useEffect(()=>{
    axios.get('https://crudcrud.com/api/343984ceeb1c4225816e4af3bac1a92d/products')
    .then((res)=>{
      itmCtx.increment(res.data);
    })
  },[])

  const [showCart,setShowCart] = useState(false);
  const showHandler=()=>{
    setShowCart(true);
}

const  hideHandler=()=>{
 setShowCart(false);
} 
  return (
    <div className="App">
      <div className='upperbody'> <CandyForm/> <Cart show={showHandler}/></div>  
      <CartItems show={showCart} hide={hideHandler}/>  
     <CandyList/>
    </div>
  );
}

export default App;
