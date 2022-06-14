import { AUTH_ERROR,AUTH_LOADING,AUTH_SUCCESS,LOGOUT } from "./auth.types";

//storing user info using localstorege
let token=localStorage.getItem("token");
const initialState={
    loading:false,
    error:false,
   isAuth:token?true:false,
   token:token,
};


export const authReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case AUTH_ERROR:{
            return {...state,loadng:false,error:true,isAuth:false
            }
        }
        case AUTH_LOADING:{
            return {...state,loading:true,error:false}
        }
        case AUTH_SUCCESS:{
            localStorage.setItem("token",payload.token);
            return{
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token:payload.token
            };
        }
        case LOGOUT:{
            localStorage.removeItem("token");
            return{...state,isAuth:false,token:""};
        }
        default:{
            return state;
        }
    }
};