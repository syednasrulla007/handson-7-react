import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
 const data=useSelector((state)=>state.Slice.value)
 console.log(data)
  return (
    <div className='con1'>
      <h1>Home</h1>
    </div>
  )
}

export default Home