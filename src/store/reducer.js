import {CHANGE_CURRENT_URL, CHANGE_INPUT_VALUE, DELETE_INPUT_VALUE} from "./actionTypes";

const defaultState = {
    data: [1, 2],
    currentPageUrl:["Home"]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState.id = action.value
            break
        case DELETE_INPUT_VALUE:
            newState.id = action.value
            break
        case 123:
            newState.id = action.value
            break
        case CHANGE_CURRENT_URL:
            newState.currentPageUrl = action.value
            break
        default:
            break
    }

    return newState
}
