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

    ],
    stateOption: [
        {key: "-1", value: "不存在"},

    ],
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

        case constants.CHANGE_SUPPLIER_LIST:
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
