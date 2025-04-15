import React, { useContext, useEffect, useState } from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'
import { productContext } from '../utils/context'

const Details = () => {
  const [product,setProduct] = useState(null)
  const [products,setProducts] = useContext(productContext);
  const navigate =  useNavigate() 
  const {id} = useParams()

  const deleteHandler =(id)=>{
    const filteredProducts = products.filter((p)=> p.id != id)
    setProducts(filteredProducts)
    localStorage.setItem('products',JSON.stringify(filteredProducts)) 
    navigate('/');
  }

 
  useEffect(() => {
    if (!product) { 
      setProduct(products.find((p) => p.id == id)) 
     
    }
  },[products,id]); 
  
  if(!product){
    return <div>loading........</div>
  }
 
  return (
    <div className='relative h-screen w-[80%] text-white bg-zinc-950 m-auto rounded-2xl p-5  font-mono'>
      <span className='absolute p-4 left-[10%] top-[1%]' ><Link to='/' className='px-4 py-2 bg-blue-600 rounded-md' >Home</Link></span>
       <button className='bg-emerald-700 px-3 py-1 rounded-md' onClick={()=> navigate(-1)}>Go Back</button>
         <div className='absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  h-[60%] w-[70%] bg-zinc-800 rounded-lg flex px-5 items-center justify-evenly gap-5'>

         
         <img className='max-h-96 max-w-96  object-cover' src={product.image} alt="" />
         

         <div className='flex flex-col gap-4'>
             <h1 className='text-2xl'>{product.title}</h1>
             <h2 className='text-zinc-400'>{product.category}</h2>
             <h3 className='text-red-600 text-xl'>{product.price}</h3>
             <h3 className='max-h-44 overflow-y-auto' style={{scrollbarWidth:"none"}}>{product.description}</h3>   

             <div className='flex gap-4'>
                 <Link to={`/edit/${product.id}`} className="bg-yellow-500 px-3 py-1 rounded-md">Edit</Link>
                 <button onClick={()=>{deleteHandler(product.id)}} className="bg-red-500 px-3 py-1 rounded-md">Delete</button>
             </div>
         </div>

     </div>
    
    </div>
  )
}

export default Details