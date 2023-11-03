import React, { useContext, useRef } from 'react'
import ItemsContext from '../store/items-context';

const CandyForm = () => {
    const nameInputRef = useRef();
    const descInputRef = useRef();
    const priceInputRef = useRef();

    const itemCtx = useContext(ItemsContext);

    const addHandler=(e)=>{
        e.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredDesc = descInputRef.current.value;
        const enteredPrice = priceInputRef.current.value;
        const obj = {name:enteredName,desc:enteredDesc,price:enteredPrice};
        itemCtx.addItemsToList(obj);
    }

  return (
    <form action="">
        <label htmlFor="name">Candy Name</label>
        <input type="" name="name" id="name"  ref={nameInputRef}/>
        <label htmlFor="desc">Description</label>
        <input type="" name="desc" id="desc" ref={descInputRef}/>
        <label htmlFor="price">Price</label>
        <input type="" name="price" id="price" ref={priceInputRef}/>
        <button onClick={addHandler}>Add</button>
    </form>
  )
}

export default CandyForm
