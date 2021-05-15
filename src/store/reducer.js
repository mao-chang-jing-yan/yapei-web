import {combineReducers} from "redux-immutable";
import {reducer as userReducer} from "../pages/home1/user/store"
import {reducer as homeReducer} from "../pages/home1/store";


const reducer  = combineReducers({
    user: userReducer,
    home: homeReducer
})

export default reducer
