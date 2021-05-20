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
import * as nostify from "../../../../component/noticefy";

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
            nostify.error(err.toString())
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
                console.log("=  =", res.data)
                if (res.data !== undefined) {
                    dispatch(changeUserInfo(res.data))
                }
            }
        ).catch(err => {
            nostify.error(err.toString())
        })
    }
}
export const updateUserInfo = (user_id, params) => {
    const url = globalData.baseURL + "/web/user/update?id=" + user_id
    return (dispatch) => {
        axios.patch(url, {
            ...params
        }).then(res => {
                console.log(res.data.data)
                dispatch(changeUserInfo(res.data))
                nostify.success("更新成功")
            }
        ).catch(err => {
            nostify.error(err.toString())
        })
    }
}

export const deleteUserInfo = (user_id) => {
    const url = globalData.baseURL + "/web/user/delete?id=" + user_id
    return (dispatch) => {
        axios.patch(url).then(res => {
                console.log(res.data)
                // dispatch(changeUserInfo(res.data))
                dispatch(changeVisible(false))
                // dispatch(getListData(1, 10, {}))
                nostify.success("删除成功")

            }
        ).catch(err => {
            nostify.error(err.toString())

        })
    }
}

export const getDeviceInfo = (user_id, index,size)=>{
    const url = globalData.baseURL + "/web/user/get_device_info?user_id="
        + user_id + "&index="+index + "&size="+size

    return (dispatch)=>{
        axios.get(url,{
            index:index,
            size:size
        }).then(res=>{

            dispatch(changeDeviceInfo(res.data))
        }).catch(err=>{
            nostify.error(err.toString())
        })
    }
}

export const changeDeviceInfo = (data)=>{
    return{
        type:constants.CHANGE_DEVICE_INFO,
        value:data
    }
}

export const login = (params) => {
    const url = globalData.baseURL + "/web/login"
    return (dispatch) => {
        axios.post(url, {
            ...params
        }).then(res => {
                console.log(res.data)
                // dispatch(changeUserInfo(res.data))
                // dispatch(changeVisible(false))
                // dispatch(getListData(1, 10, {}))
                const token =  res.data.token
                if (token!==undefined && token!==null){
                    dispatch(changeMyInfo(true,true, token))
                }
            }
        ).catch(err => {
            nostify.error(err.toString())

        })
    }
}

export const changeMyInfo = (isLogin,isRegister, token) => {
    return {
        type: constants.LOGIN,
        value: {isLogin: isLogin,isRegister:isRegister, token: token}
    }
}

export const register = (params)=>{
    const url = globalData.baseURL + "/web/register"
    return (dispatch) => {
        axios.post(url, {
            ...params
        }).then(res => {
                console.log(res.data)
                // dispatch(changeUserInfo(res.data))
                // dispatch(changeVisible(false))
                // dispatch(getListData(1, 10, {}))
                // const token =  res.data.token
                // dispatch(changeMyInfo(true, token))
            }
        ).catch(err => {
            nostify.error(err.toString())

        })
    }
}

