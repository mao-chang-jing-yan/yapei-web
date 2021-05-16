import {combineReducers} from "redux-immutable";
import {reducer as userReducer} from "../pages/home1/user/store"
import {reducer as homeReducer} from "../pages/home1/store";
import {reducer as webDeviceReducer} from "../pages/home1/webdevice/store"


const reducer  = combineReducers({
    user: userReducer,
    home: homeReducer,
    webDevice:webDeviceReducer,
})

export default reducer
