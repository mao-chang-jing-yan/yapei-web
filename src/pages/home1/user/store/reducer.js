import {fromJS} from "immutable";
import * as constants from "./actionTypes";

const defaultState = fromJS({
    searchParams: {},
    createUserInfo: {},
    tableData: {count: 0, num: 0, data: []},
    visible: false,
    pagination: {
        current: 1,
        pageSize: 10,
        total: 0
    },
    userInfo: {},
    myInfo: {
        isLogin: false,
        isRegister:false,
        token: ""
    },
    // isLogin: false,
    typeOption: [
        {key: "-2", value: "所有用户"},
        {key: "0", value: "普通用户"},
        {key: "1", value: "管理员"},
        {key: "2", value: "后台操作员"},
        // {key:"3",value:""},
    ],
    stateOption: [
        {key: "-2", value: "所有用户"},
        {key: "-1", value: "不存在"},
        {key: "0", value: "已删除"},
        {key: "1", value: "正常"},
    ],
    deviceInfo:{
      count:0,
      num:0,
      data:
    [
        {
            device_type: 0,
            device_id: 'web_device_0',
            device_state: 0,
            update_at: '2021-05-11T22:29:36.92+08:00',
            ram_name: 'web_device_0',
            client_id: 'GID_device@@@web_device_0',
            current_user: '609a281ed6501d103a590c6f',
            current_hard_devices_id_list: [
                'hard_device_0',
                'hard_device_1'
            ],
            hard_device_list: [
                {
                    _id: '607a8c395f6bcc080b79c108',
                    current_sensors_id_list: [
                        'sensor_0'
                    ],
                    current_web_device_id: 'web_device_0',
                    device_id: 'hard_device_0',
                    device_state: 0,
                    device_type: 0,
                    sensor_list: [
                        {
                            _id: '60a1012896d6819a0b3ea280',
                            create_at: '2021-05-16T19:25:28.567+08:00',
                            current_hard_device_id: 'hard_device_0',
                            device_id: 'sensor_0',
                            device_state: 0,
                            device_type: 0,
                            update_at: '2021-05-16T19:25:28.567+08:00'
                        }
                    ]
                },
                {
                    _id: '607a8c395f6bcc080b79c109',
                    current_sensors_id_list: null,
                    current_web_device_id: 'web_device_0',
                    device_id: 'hard_device_1',
                    device_state: 0,
                    device_type: 0,
                    sensor_list: []
                }
            ],
            _id: '607a8c395f6bcc080b79bd20'
        }
    ],
    },
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
            console.log("tableData", action.value)
            console.log("state", state)
            state.set("tableData", action.value)

            state = state.setIn(['tableData'], fromJS(action.value))

            // console.log("state",state.get("tableData"))

            // state.merge({
            //     "tableData":action.value.valueOf()
            // })
            break

        case constants.CHANGE_PAGINATION:
            return state.setIn(['pagination'], fromJS(action.value))


        case constants.CHANGE_SEARCH_PARAMS:
            const searchParams = state.get("searchParams").toJS()
            searchParams[action.value.key] = action.value.value

            return state.set("searchParams", fromJS(searchParams))
        case constants.CHANGE_VISIBLE:
            return state.set("visible", fromJS(action.value))
        case constants.CHANGE_USER_INFO:
            console.log("dsdfds= ", action.value)
            return state.set("userInfo", fromJS(action.value))

        case constants.LOGIN:
            return state.set("myInfo", fromJS(action.value))
        case constants.CHANGE_DEVICE_INFO:
            return state.set("deviceInfo", fromJS(action.value))

        default:
            break
    }

    return state
}
