import axios from "axios";
import React, { useState } from "react";

const ItemsContext = React.createContext({
    items:[],
    addItemToList:(item)=>{},
})

export const ItemsContextProvider=(props)=>{

    const [listItems,setListItems] = useState([]);

    // const addItemToListHandler=(item)=>{
    //         setListItems(prev=>[...prev,item]);
    //         console.log(item);
    // }

    const addItemToListHandler=(item)=>{
          
        axios.post(`https://crudcrud.com/api/343984ceeb1c4225816e4af3bac1a92d/products`,
        {...item}
        ).then((res)=>{
          console.log('added successfully');
          setListItems(prev=>[...prev,res.data]);
        }).catch(err=>{
          console.log(err);
        })
     
  }

    const itemsValue = {
        items:listItems,
        addItemsToList:addItemToListHandler
    }

    return <ItemsContext.Provider value={itemsValue}>
        {props.children}
    </ItemsContext.Provider>
}

export default ItemsContext;