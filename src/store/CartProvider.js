import axios from 'axios';
import React, { useState } from 'react'
import CartContext from './cart-context';

const CartProvider = (props) => {

    const [items,setItems] = useState([]);
    const [totalAmount,setTotalAmount] = useState(0);
    const [totalQuantity,setTotalQuantity] = useState(0);



    const addItemToCartHandler=(item)=>{
          
              axios.post(`https://crudcrud.com/api/343984ceeb1c4225816e4af3bac1a92d/cart`,
              {...item}
              ).then((res)=>{
                console.log('added successfully');
                setItems(prev=>[...items,res.data]);
              }).catch(err=>{
                console.log(err);
              })
           
        }
    
    //     const removeItemFromCartHandler =(id)=>{
            
    //         const newMail =localStorage.getItem('email');
            
    //         let ids= [];
    //         axios.get(`https://crudcrud.com/api/f4d21b792de3454181abf7e1a9b3ea3d/cart${newMail}`)
    //         .then((res)=>{
    //           for(let i=0;i<res.data.length;i++)
    //           {
    //             if(res.data[i].id === id)
    //             {
    //               ids.push(res.data[i]._id);
    //             }
    //           }
    //           for(let i=0;i<ids.length;i++)
    //           {
    //             axios.delete(`https://crudcrud.com/api/f4d21b792de3454181abf7e1a9b3ea3d/cart${newMail}/${ids[i]}`)
    //             .then((res)=>{
    //               setItems(prev=>[...prev,res.data]);
    //               const filteredItems = items.filter((item)=> item.id !== id);
    //             setItems(filteredItems);
    //             })
    //           }
                          
    //         })
    //     }

        const incrementHandler=(item)=>{
            setItems(...items,item);
        }
        const cartContext = {
            items:items,
            totalQuantity:totalQuantity,
            totalAmount:totalAmount,
            addItem:addItemToCartHandler,
            // removeItem:removeItemFromCartHandler,
            incrementItem:incrementHandler,
            }

  return (
    <CartContext.Provider value={cartContext}>

      {props.children}
    </CartContext.Provider>

  )
}

export default CartProvider
