import React from 'react';
import Home1 from "./pages/home1";
import Login from "./pages/home1/login";
import UserTable from "./pages/home1/user";
import UserIndex from "./pages/home1/user/userIndex";
import WebDeviceIndex from "./pages/home1/webdevice/deviceIndex";
import WebDevice from "./pages/home1/webdevice";
import HardDevice from "./pages/home1/harddevice";
import SupplierIndex from "./pages/home1/supplier/router";
import Supplier from "./pages/home1/supplier";
import {UserOutlined} from "@ant-design/icons";


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
                // icon: ,
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
            {
                path: '/device',
                title: "设备管理",
                component: WebDeviceIndex,
                // exact: true,
                children: [
                    {
                        path: '/device/web_device',
                        title: "背夹",
                        component: WebDevice
                    },
                    {
                        path: '/device/hard_device',
                        title: "硬件设备",
                        component: HardDevice
                    },
                    // {
                    //     path: '/device/sensor',
                    //     title: "传感器",
                    //     // component: UserTable
                    // },

                ]
            },
            {
                path: '/supplier',
                title: '供应商管理',
                component: SupplierIndex,
                children: [
                    {
                        path: "/supplier/list",
                        title: "供应商列表",
                        component: Supplier,
                    },
                    {
                        path: "/supplier/product",
                        title: "产品列表"
                    },
                    {
                        path: "/supplier/sale",
                        title: "交易记录"
                    }
                ]
            },

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
