// import { message } from 'antd'
// import { ERROR } from '../config/error.config';
// import createHistory from 'history/createHashHistory';
// import  axios from "axios";
// let cancelFlag:boolean = false;
//
// // 响应拦截
// axios.interceptors.response.use((response) => {
//     return response
// }, (err) => {
//     if(err.response.status === '401'){
//         if(cancelFlag) return Promise.reject(err);
//         cancelFlag = true;
//         message.error(ERROR.LOGIN_EXPIRESSED);
//         localStorage.removeItem('__config_center_token');
//         localStorage.removeItem('__config_center_niceName');
//         localStorage.removeItem('__config_center_imageUrl');
//         const history = createHistory();
//         setTimeout(() => {
//             history.push('/login')
//             setTimeout(() => {
//                 cancelFlag = false;
//             },1000)
//         },1500)
//     }
//     return Promise.reject(err)
// })
