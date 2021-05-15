import React from 'react';
import Home1 from "./pages/home1";
import Login from "./pages/home1/login";
import UserTable from "./pages/home1/user";
import UserIndex from "./pages/home1/user/userIndex";


const routes = [
    {
        path: "/login",
        title: "登陆",
        component: Login,
        exact: true
    },
    {
        path: '',
        component: Home1,
        title: "主页",
        exact: true,
        children: [
            {
                path: '/user',
                title: "用户管理",
                component: UserIndex,
                // exact: true,
                children: [
                    {
                        path: '/user/normal',
                        title: "用户列表",
                        component: UserTable,
                        exact: true,
                    },
                    // {
                    //     path: '/user/admin',
                    //     title: "超级管理员",
                    //     exact: true,
                    //     component: UserTable
                    // },
                    // {
                    //     path: '/user/admin1',
                    //     title: "管理员",
                    //     exact: true,
                    //     component: UserTable
                    // },

                ]
            },
            // {
            //     path: '/device',
            //     title: "设备管理",
            //     // component: UserTable,
            //     // exact: true,
            //     children: [
            //         {
            //             path: '/device/web_device',
            //             title: "背夹",
            //             // component: UserTable
            //         },
            //         {
            //             path: '/device/hard_device',
            //             title: "硬件设备",
            //             // component: UserTable
            //         },
            //         {
            //             path: '/device/sensor',
            //             title: "传感器",
            //             // component: UserTable
            //         },
            //
            //     ]
            // },
        ]
    },


    // {
    //     path: '/faq',
    //     component: FyCommonProblem
    // },
    // {
    //     path: '/map',
    //     component: FyCompanyPosition
    // },
];

export default routes
