import React, {  useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addstd } from '../Features/adddata'



const AddStudent = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
 
  // console.log(arr)
  const[obj,changeobj]=useState({
    Name:"",
    Age:"",
    Course:"",
    Batch:""
  })
  function Changehandler(e){
    // console.log(e.target.value)
    changeobj({...obj,[e.target.name]:e.target.value})
    // console.log(obj)
  }
  function add(){
    dispatch(addstd(obj))
    navigate('/student')
    
  }
  return (
    <div className='con1'>
      <h1>Add Student</h1>
        <div className='con2'>
        <input placeholder='Name' name='Name'  onChange={Changehandler}></input>
        <br />
        <input placeholder='Age' name='Age'  onChange={Changehandler}></input>
        <br />
        <input placeholder='Course' name="Course" onChange={Changehandler}></input>
        <br />
        <input placeholder='Batch' name="Batch" onChange={Changehandler}></input>
        <br />
        </div>
       <div className='con3'>
       <Link to='/student'><button>Cancle</button></Link>
        <br />
       <button onClick={add} > Submit</button>
       </div>
    </div>
  )
}

export default AddStudent