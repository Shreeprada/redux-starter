import { AUTH_ERROR,AUTH_LOADING,AUTH_SUCCESS,LOGOUT } from "./auth.types";
import axios from "axios";
export const login=(creds)=>(dispatch)=>{
    dispatch({type:AUTH_LOADING});
    axios.post("https://reqres.in/api/login",{
        email:creds.email,
        password:creds.password,
    })
    .then((r)=>{
        dispatch({type:AUTH_SUCCESS,payload:r.data});
    })
    .catch(()=>{dispatch({type:AUTH_ERROR});
                });
};
export const logout=()=>({type:LOGOUT});