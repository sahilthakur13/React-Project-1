import React from 'react'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Details from './components/Details'
import Createproduct from './components/Createproduct'
import Edit from './components/Edit'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Details/>} />
      <Route path='/create' element={<Createproduct/>} />
      <Route path='/edit/:id' element={<Edit/>} />
    </Routes>
    </>
  )
}

export default App