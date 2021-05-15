// import axios,{AxiosRequestConfig} from "axios";
//
// export const we = ()=>{
//     return (dispatch)=>{
//
//         axios.defaults.headers.common.Authorization = "my-awesome-token";
//         axios.defaults.baseURL = "http://127.0.0.1:8002/api";
//         axios.get("/v1/web/user/query",{
//             method: "GET",
//             // url: `http://127.0.0.1:8002/api/v1`,
//             // data: null,
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         } ).then(res => {
//             console.log(res)
//         }).catch(err => {
//             console.log(err)
//         })
//     }
// }

import {CHANGE_CURRENT_URL, CHANGE_INPUT_VALUE} from "./actionTypes";
import {fromJS} from "immutable";
import axios from "axios";
import {constants} from "./index";
import {globalData} from "../../../globaldata/globaldata";
