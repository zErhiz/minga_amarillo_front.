import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const manga_read=createAsyncThunk('manga_read',async()=>{
try {
    let token = localStorage.getItem('token')
    let headers = { headers: { 'Authorization': `Bearer ${token}` } }
let res=await axios(apiUrl+'mangas/me',headers)
return {mangas:res.data.response}

} catch (error) {
    return {
        mangas:[]
    }
    
}

})

const actions={manga_read}
export default actions