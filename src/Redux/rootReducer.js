import { combineReducers } from "redux";
import templateReducer from "./Reducers/templateReducer";
import userReducer from "./Reducers/userReducer";
import detailsReducer from "./Reducers/detailsReducer";
import  { saveReducer }from "./Reducers/saveReducer";

let rootReducer = combineReducers({
    template : templateReducer,
    user : userReducer,
    details : detailsReducer,
    saveState : saveReducer,
});
export default rootReducer;