import { createSlice } from "@reduxjs/toolkit";



export const slicedata=createSlice({
    name:"Slice",
    initialState:{value:[
        {Name:"John",Age:26,Course:"MERN",Batch:"October"},
        {Name:"Doe",Age:25,Course:"MERN",Batch:"November"},
        {Name:"Biden",Age:26,Course:"MERN",Batch:"Septembar"},
        {Name:"Barar",Age:22,Course:"MERN",Batch:"Septembar"},
        {Name:"Chris",Age:23,Course:"MERN",Batch:"October"},
        {Name:"Elent",Age:24,Course:"MERN",Batch:"November"}
      ]},
    reducers:{
        addstd:(state,action)=>{
           state.value.push(action.payload)
            
        },
        editstd:(state,action)=>{
          console.log(action.payload.newObj)
          state.value[action.payload.index]=action.payload.newObj;
        }
     }
})
export const {addstd,editstd}=slicedata.actions
export default slicedata.reducer