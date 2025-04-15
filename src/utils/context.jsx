import axios from 'axios';
import React, {useEffect, useState } from 'react';
import { createContext } from 'react';
export const productContext= createContext();



const context = (props) => {
const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')));

// const getProducts =async()=>{

//   try {
//     const {data} = await axios.get('/products')
//       setProducts(data)
//   } catch (error) {
//     console.log(error);
//   } 
// }
//       useEffect(()=>{
//         getProducts()
//       },[])

  return (
    <productContext.Provider value={[products,setProducts]}> 
          {props.children}
  </productContext.Provider>
  )
}

export default context