import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { Link, useLocation } from 'react-router-dom'
import {productContext} from '../utils/context'
import Loading from './Loading'

//   overflow-x-hidden overflow-y-auto  important hai
const Home = () => {

  const [products]  = useContext(productContext);
  const {search,pathname} = useLocation();
  const  Searchedatagory = search ? decodeURIComponent(search.split('=')[1]) : null;

   const[filterData ,setFilterData] = useState([])

    useEffect(()=>{      
      if(!Searchedatagory) {
        setFilterData(products)
      }
      else{
        let filteredData  =  products.filter((p)=> p.category == Searchedatagory)
        setFilterData(filteredData)
      }
    },[Searchedatagory,products])
    
    return products ? (
      <div className='h-full w-full flex '>
    <Nav/>
    <div className='relative h-screen bg-zinc-900 w-[83%] flex flex-wrap p-5 gap-5 overflow-x-hidden overflow-y-auto py-20'> 
      {(pathname != '/' || search.length > 0) && (
    <span className='absolute p-4 left-[5%] top-[1%]' ><Link to='/' className='px-3 py-1 bg-emerald-600 rounded-md' >Home</Link></span>

      )}

    {filterData.map((product,i)=>(
      <Link key={i} to={`/details/${product.id}`} className='max-h-80 w-56 bg-zinc-700 rounded-md overflow-hidden p-2'>
      <div className='h-48 w-auto overflow-hidden bg-zinc-700'>
          <img className='h-full w-full object-contain' src={product. image} />
      </div>
      <div className='py-2 text-white'> 
      <h1 className='text-md font-semibold'>{product.title}</h1>
      </div>
  </Link>
    ))}
    
    </div>
  </div>
  ) : <Loading/>
}

export default Home