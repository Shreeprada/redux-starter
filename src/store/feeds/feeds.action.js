import { FEEDS_LOADING,FEEDS_ERROR,FEEDS_SUCCESS } from "./feeds.types";
import axios from "axios";
export const getFeedsAPI=()=>(dispatch)=>{
    dispatch({type:FEEDS_LOADING});
    axios.get("http://localhost:8080/feeds")
    .then((r)=>{
        dispatch({type:FEEDS_SUCCESS,payload:r.data});
    })
    .catch(()=>{dispatch({type:FEEDS_ERROR});
                });
};