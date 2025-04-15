import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { productContext } from '../utils/context';
import { useNavigate } from 'react-router-dom';


const Edit = () => {
        const[products,setProducts] = useContext(productContext);
        const navigate = useNavigate()
        const {id} = useParams();
    const[product ,setProduct] = useState({
        image:"",
        title:"",
        price:"",
        category :"",
        description:""
    })
    const changeHandler= (e)=>{
            setProduct({...product,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
       const specificProduct = products.find((p)=> p.id == id)
       setProduct(specificProduct)
       
    },[id])

const submitHandler = (e)=>{
             e.preventDefault()
             if(
                product.image.trim().length < 4 ||
                product.title.trim().length < 4 ||
                product.category.trim().length < 4 ||
                product.price.trim().length < 1 ||
                product.description.trim().length < 4 
             ){
                alert('Each and Every input must have at least 4 characters')
             }

             const productIndex = products.findIndex((p)=>p.id == id)
             let copyData = [...products]
             copyData[productIndex] =  {...products[productIndex], ...product}


             localStorage.setItem('products',JSON.stringify(copyData))
             setProducts(copyData)
             navigate(-1);
}

    return (
        <div className='h-screen w-full p-4 flex justify-center flex-col items-center'>
            <Link to='/'>Home</Link>
            <h1 className='text-2xl'>Edit Products</h1>

            <form  onSubmit={submitHandler} className='flex flex-col w-2/5 text-zinc-300'>   
                <label>Image Url</label>
                <input  onChange={changeHandler} name='image' value={product && product.image} required type="url" placeholder='Product Image' className='px-3 mb-2 text-base bg-zinc-600 py-1' />

                <label>Title</label>
                <input  onChange={changeHandler} name='title' value={product && product.title} required type="text" placeholder='Product Title' className='px-3 mb-2 text-base bg-zinc-600 py-1' />

                <label>Price </label>
                <input onChange={changeHandler} name='price' value={product && product.price} required type="Number" placeholder='Product price' className='px-3  mb-2 text-base bg-zinc-600 py-1' />

                <label>Category</label>
                <input  onChange={changeHandler} name='category' value={product && product.category} required type="text" placeholder='Product Category' className='px-3 mb-2 text-base bg-zinc-600 py-1' />

                <label >Description</label>
                <textarea onChange={changeHandler} name='description' value={product && product.description} required className='rounded p-2 text-zinc-300  bg-zinc-600' placeholder='Enter Product Description' />

                <span className='my-3'><button className='bg-green-600 px-3 py-1 rounded text-white'>Edit Product</button></span>
            </form>

        </div>
    )
}

export default Edit