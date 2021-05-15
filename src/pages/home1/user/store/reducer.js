import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    searchParams:{},
    tableData:{count:0,num:0,data:[]},
    visible:false,
    pagination: {
        current: 1,
        pageSize: 10,
        total: 10
    },
    userInfo:{},
    isLogin: false
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case constants.CHANGE_LIST_DATA:
            // console.log(state, action)
            // state = state.set("tableData", action.value)
            // console.log(state, action)
            // newState.searchParams = action.value
            console.log("tableData",action.value)
            console.log("state",state)
            state.set("tableData", action.value)

            state = state.setIn(['tableData'],fromJS(action.value))

            // console.log("state",state.get("tableData"))

            // state.merge({
            //     "tableData":action.value.valueOf()
            // })
            break

        case constants.CHANGE_PAGINATION:
            return  state.setIn(['pagination'],fromJS(action.value))


        case constants.CHANGE_SEARCH_PARAMS:
            const searchParams = state.get("searchParams").toJS()
            searchParams[action.value.key] =  action.value.value

            return state.set("searchParams", fromJS(searchParams))
        case constants.CHANGE_VISIBLE:
            return state.set("visible", fromJS(action.value))
        case constants.CHANGE_USER_INFO:
            console.log("dsdfds= ",action.value)
            return state.set("userInfo", fromJS(action.value))

        default:
            break
    }

    return state
}
