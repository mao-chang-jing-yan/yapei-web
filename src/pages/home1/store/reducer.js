import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({

})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    // const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {

        // case constants.CHANGE_SEARCH_PARAMS:
        //     const searchParams = state.get("searchParams").toJS()
        //     searchParams[action.value.key] =  action.value.value
        //
        //     return state.set("searchParams", fromJS(searchParams))

        default:
            break
    }

    return state
}
