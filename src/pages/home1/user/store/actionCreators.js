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


import axios from "axios";
import {constants} from "./index";
import {globalData} from "../../../../globaldata/globaldata";

export const changeInputValue = (e) => {

    return {
        type: constants.CHANGE_INPUT_VALUE,
        value: e
    }
}

export const changeSearchParams = (key, value) => {
    let params = {
        key: key,
        value: value
    }

    return {
        type: constants.CHANGE_SEARCH_PARAMS,
        value: params
    }
}
export const changePagination = (index, size, total) => {
    const p = {
        current: index,
        pageSize: size,
        total: total
    }
    return {
        type: constants.CHANGE_PAGINATION,
        value: p
    }
}

export const changeList = (data) => {
    // console.log(data)

    return {
        type: constants.CHANGE_LIST_DATA,
        value: data
    }
}


export const getListData = (index, size, params) => {
    const url = globalData.baseURL + "/web/user/query?size=" + size + "&index=" + index
    return (dispatch) => {
        axios.get(url, {
            params: params
        }).then(res => {
                console.log(res.data.data)
                dispatch(changePagination(index, size, res.data.num))
                dispatch(changeList(res.data))

            }
        ).catch(err => {
            console.log("err", err)
        })
    }
}

export const changeVisible = (bool) => {
    return {
        type: constants.CHANGE_VISIBLE,
        value: bool
    }
}

export const changeUserInfo = (value) => {
    return {
        type: constants.CHANGE_USER_INFO,
        value: value
    }
}
export const getUserInfo = (user_id) => {
    const url = globalData.baseURL + "/web/user/get?id=" + user_id
    return (dispatch) => {
        axios.get(url).then(res => {
                console.log("=  =",res.data)
            if (res.data!==undefined){
                dispatch(changeUserInfo(res.data))
            }
            }
        ).catch(err => {
            console.log("err", err)
        })
    }
}
export const updateUserInfo = (user_id, params) => {
    const url = globalData.baseURL + "/web/user/update/:id=" + user_id
    return (dispatch) => {
        axios.patch(url, {
            ...params
        }).then(res => {
                console.log(res.data.data)
                dispatch(changeUserInfo(res.data))
            }
        ).catch(err => {
            console.log("err", err)
        })
    }
}
