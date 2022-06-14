import { getFeedsAPI } from "./feeds.action";
import { FEEDS_LOADING,FEEDS_SUCCESS,FEEDS_ERROR } from "./feeds.types";
const initialState={
    getFeeds:{
    loading:false,
    error:false,
    },
    data:[]
};
export const feedsReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case FEEDS_LOADING:{
            return{...state,
            getFeeds:{
                        loading:true,error:false
                    }
                }
        }
        case FEEDS_SUCCESS:{
            return{...state,
                getFeeds:{loading:false,error:false},
            data:payload,};
        }
        case FEEDS_ERROR:{
            return{...state,
                getFeeds:{loading:false,error:true}}
        }
        default:{
            return state;
        }
    }
};