

import axios from "axios";
import {constants} from "./index";
import {globalData} from "../../../../globaldata/globaldata";
import * as notify from "../../../../component/noticefy";

export const getWebDeviceList = (index, size,params)=>{
    const url = globalData.baseURL + "/web/web_device/query?size=" + size + "&index=" + index
    return(dispatch)=>{
        axios.get(url, {
            index:index,
            size:size,
            ...params
        }).then(res=>{
            console.log(res)
            dispatch(changePagination(index, size, res.data.num))
            dispatch(changeWebDeviceList(res.data))
        }).catch(err=>{
            notify.error(err.toString())

        })
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

export const changeWebDeviceList = (data)=>{
    return{
        type:constants.CHANGE_WEB_DEVICE_LIST,
        value: data
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
