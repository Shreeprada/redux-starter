import {legacy_createStore,applyMiddleware,combineReducers,compose} from "redux";
import { authReducer } from "./auth/auth.reducer";
import { feedsReducer } from "./feeds/feeds.reducer";
import thunk from "redux-thunk";
const rootReducer=combineReducers({
    auth:authReducer,
    feed:feedsReducer,
});
export const store=legacy_createStore(rootReducer,applyMiddleware(thunk));