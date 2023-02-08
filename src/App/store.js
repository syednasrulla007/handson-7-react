import { configureStore } from "@reduxjs/toolkit";
import slicedata from "../Features/adddata";

export default configureStore({
    reducer:{
        Slice:slicedata
    }
})