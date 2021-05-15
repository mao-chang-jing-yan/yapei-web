import {Breadcrumb, Layout, Menu} from 'antd';
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons';
import React, {PureComponent} from "react";
import "./inde.css"
import {CreateChangeCurrentUrl} from "../../store/actionCreators";
import {connect} from "react-redux";
import TableTest from "./table";
import Table1 from "./table/er";
import UserTable from "./user";
import {Link, withRouter} from "react-router-dom";
import {renderRoutes} from 'react-router-config'


const {SubMenu} = Menu;
const {Header, Content, Sider} = Layout;


class Home1 extends PureComponent {
    menu = [
        {
            key: "title1", value: "用户管理", icon: <UserOutlined/>, name: "用户管理", children: [
                {key: "s_title1", value: "超级管理员", name: "超级管理员"},
                {key: "s_title2", value: "普通操作员", name: "普通操作员"},
                {key: "s_title3", value: "普通用户", name: "普通用户"},
            ]
        },

        {
            key: "title2", value: "患者管理", icon: <LaptopOutlined/>, name: "患者管理", children: [
                {key: "s_title1", value: "血糖数据", name: "血糖数据"},
                {key: "s_title2", value: "设备管理", name: "设备管理"},
                {key: "s_title3", value: "", name: ""},
            ]
        },

        {
            key: "title3", value: "设备管理", icon: <NotificationOutlined/>, name: "设备管理", children: [
                {key: "s_title1", value: "背夹", name: "背夹"},
                {key: "s_title2", value: "硬件", name: "硬件"},
                {key: "s_title3", value: "传感器", name: "传感器"},
            ]
        },

        {
            key: "title4", value: "", name: "采购", children: [
                {key: "s_title1", value: "", name: "供应商"},
                {key: "s_title2", value: "", name: "产品清单"},
                // { key: "s_title3", value:"", name:"账单"},
            ]
        },
    ]

    constructor(props) {
        super(props);
        this.state = {
            route: props.route,
        }
    }

    render() {
        const {route} = this.state;
        // const children = route.children
        // const children = []
        // for (let i = 0; i < route.children.length; i++) {
        //     const ro = route.children[i]
        //     ro.path = route.path + ro.path
        //     children.push(ro)
        // }
        console.log("route  ", route)

        return (
            <Layout>
                <Header className="header">
                    <div className="middle">
                        <div className={"logo"}>
                            <Link to={"/login"}>
                                logo
                            </Link>
                        </div>

                    </div>
                    {/*<Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>*/}
                    {/*    <Menu.Item key="1">nav 1</Menu.Item>*/}
                    {/*    <Menu.Item key="2">nav 2</Menu.Item>*/}
                    {/*    <Menu.Item key="3">nav 3</Menu.Item>*/}
                    {/*</Menu>*/}
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{height: '100%', borderRight: 0}}
                            // onClick={this.props.changeCurrentUrl}
                        >
                            {/*{*/}
                            {/*    this.menu.map((item, index1)=> {*/}

                            {/*        return (*/}
                            {/*            <SubMenu key={item.name} icon={item.icon} title={item.name}>*/}
                            {/*                {*/}
                            {/*                    item.children.map((item2, index2)=>{*/}
                            {/*                        return(*/}
                            {/*                            <Menu.Item key={item2.name}><Link to={"/user"}>{item2.name}</Link></Menu.Item>*/}
                            {/*                        )*/}
                            {/*                    })*/}
                            {/*                }*/}
                            {/*            </SubMenu>*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*}*/}
                            {
                                route.children.map((item, index) => {
                                    const path = item.path
                                    return (
                                        <SubMenu key={path} icon={<UserOutlined/>} title={item.title}>
                                            {
                                                item.children.map((item1, index1)=>{
                                                    return(
                                                        <Menu.Item key={item1.path}><Link to={item1.path}>{item1.title}</Link></Menu.Item>
                                                    )
                                                })
                                            }


                                        </SubMenu>
                                    )
                                })
                            }


                            {/*<SubMenu key="sub1" icon={<UserOutlined />}  title="用户管理">*/}
                            {/*    <Menu.Item key="1" >超级管理员</Menu.Item>*/}
                            {/*    <Menu.Item key="2">普通操作员</Menu.Item>*/}
                            {/*    <Menu.Item key="3">普通用户</Menu.Item>*/}
                            {/*    /!*<Menu.Item key="4">option4</Menu.Item>*!/*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub2" icon={<LaptopOutlined />} title="患者管理">*/}
                            {/*    <Menu.Item key="5">血糖数据</Menu.Item>*/}
                            {/*    <Menu.Item key="6">设备管理</Menu.Item>*/}
                            {/*    /!*<Menu.Item key="7">option7</Menu.Item>*!/*/}
                            {/*    /!*<Menu.Item key="8">option8</Menu.Item>*!/*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub3" icon={<NotificationOutlined />} title="设备管理">*/}
                            {/*    <Menu.Item key="9">背夹</Menu.Item>*/}
                            {/*    <Menu.Item key="10">硬件</Menu.Item>*/}
                            {/*    <Menu.Item key="11">传感器</Menu.Item>*/}
                            {/*    /!*<Menu.Item key="12">option12</Menu.Item>*!/*/}
                            {/*</SubMenu>*/}
                            {/*<SubMenu key="sub4" icon={<NotificationOutlined />} title="采购">*/}
                            {/*    <Menu.Item key="12">背夹</Menu.Item>*/}
                            {/*    <Menu.Item key="13">硬件</Menu.Item>*/}
                            {/*    <Menu.Item key="14">传感器</Menu.Item>*/}
                            {/*    /!*<Menu.Item key="12">option12</Menu.Item>*!/*/}
                            {/*</SubMenu>*/}
                        </Menu>
                    </Sider>
                    <Layout style={{padding: '5px 24px 24px 24px'}}>
                        <Breadcrumb style={{margin: '9px 0', left: 0, width: "40%", textAlign: "left"}}>
                            {
                                this.props.currentPageUrl == null ? "" : this.props.currentPageUrl.map((item, index) => {
                                    return (
                                        <Breadcrumb.Item key={item + index}>{item}</Breadcrumb.Item>
                                    )
                                })
                            }
                            {/*<Breadcrumb.Item>Home</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>List</Breadcrumb.Item>*/}
                            {/*<Breadcrumb.Item>App</Breadcrumb.Item>*/}
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 690

                            }}
                        >
                            {renderRoutes(route.children)}
                            {/*{*/}
                            {/*    route.children.map((item, index)=>{*/}
                            {/*        return(*/}
                            {/*            <>*/}
                            {/*                {renderRoutes(item.children)}*/}
                            {/*            </>*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*}*/}


                        </Content>
                    </Layout>
                </Layout>
            </Layout>

        )
    }
}

// ReactDOM.render(
//     mountNode,
// );

const mapStateToProps = (state) => {
    return {
        // currentPageUrl:state.currentPageUrl
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeCurrentUrl(e) {
            // const action = CreateChangeCurrentUrl()
            // action.value = JSON.parse(JSON.stringify(e.keyPath)).reverse()
            //
            // console.log(action, e.keyPath.reverse())
            //
            // dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(withRouter(Home1));
