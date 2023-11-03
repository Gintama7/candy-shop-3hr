
import { useState } from 'react';
import './App.css';
import CandyForm from './components/CandyForm';
import CandyList from './components/CandyList';
import Cart from './components/Cart';
import CartItems from './components/CartItems';

function App() {

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
