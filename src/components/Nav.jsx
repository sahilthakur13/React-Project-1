import React, { useContext } from 'react'
import { productContext } from '../utils/context'
import { Link } from 'react-router-dom';


const Nav = () => {
  const [products] = useContext(productContext);
  let categories = products && products.reduce((acc, cv) => [...acc, cv.category], [])
  let catagory = [...new Set(categories)]

  return (
    <nav className='h-screen w-[17%] bg-zinc-900 text-white p-3 flex flex-col items-center flex-wrap'>
      <div className='p-4 '>
        <Link to="/create" className='bg-green-600 px-3 py-1 rounded-md text-white' >Create New Products</Link>
      </div>

      <div className='py-5 font-mono'>
        <h1 className='text-2xl '>Catagory Filter</h1>
        <ul className='flex flex-col gap-3 pt-4'>
          {catagory.map((c, i) => (
            <Link to={`/?category=${c}`} key={i} className='flex items-center gap-2'> <span className='h-[15px] rounded-full  w-[15px] bg-red-500'> </span>{c}</Link>

          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav