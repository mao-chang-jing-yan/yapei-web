import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    searchParams: {},
    tableData: {count: 0, num: 0, data: []},
    visible: false,
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0
    },
    deviceInfo: {},

    typeOption: [
        {key: "-2", value: "所有用户"},
        {key: "0", value: "普通用户"},
        {key: "1", value: "管理员"},
        {key: "2", value: "后台操作员"},
        // {key:"3",value:""},
    ],
    stateOption: [
        {key: "-1", value: "不存在"},
        {key: "0", value: "已删除"},
        {key: "1", value: "正常"},
    ],
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

        case constants.CHANGE_WEB_DEVICE_LIST:
            return state.set("tableData", fromJS(action.value))
        case constants.CHANGE_SEARCH_PARAMS:
            const searchParams = state.get("searchParams").toJS()
            searchParams[action.value.key] = action.value.value

            return state.set("searchParams", fromJS(searchParams))
        case constants.CHANGE_PAGINATION:
            return state.setIn(['pagination'], fromJS(action.value))

        default:
            break
    }

    return state
}
