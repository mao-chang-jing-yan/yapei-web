import React, {Component, Fragment, PureComponent} from "react";
import {Row, Col, Divider, Input, Button, Select, Popconfirm, Drawer, DatePicker} from 'antd';

import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Table} from "antd";
import UserDetail from "./detail";
import CreateUser from "./createUser";

// const { RangePicker } = DatePicker;

const searchT = (props) => {
    const typeOption = props.typeOption
    const stateOption = props.stateOption
    const Option = Select.Option;
    const handleChange = (e,e1)=>{
        console.log("v1  ",e.target.value)
        console.log("v2",e1)
    }

    return (
        <Fragment>


            <Row justify="space-around">
                <Col span={5}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>姓名</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                placeholder="Basic usage"
                                value={props.searchParams.name}
                                onChange={(e) => props.changeSearchParams(e, "name")}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>电话</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                placeholder="Basic usage"
                                value={props.searchParams.phone}
                                onChange={(e) => props.changeSearchParams(e, "phone")}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={5}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>状态</div>
                        </Col>
                        <Col span={18}>
                            <Select
                                showSearch
                                style={{width: "100%"}}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={(value) => props.changeOp("state", value)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    stateOption.map((item, index) => {
                                        return (
                                            <Option value={item.key} key={item.key + index}>{item.value}</Option>
                                        )
                                    })
                                }
                                {/*<Option value="jack">Jack</Option>*/}
                                {/*<Option value="lucy">Lucy</Option>*/}
                                {/*<Option value="tom">Tom</Option>*/}
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span={5}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>类型</div>
                        </Col>
                        <Col span={18}>
                            <Select
                                showSearch
                                style={{width: "100%"}}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={(value) => props.changeOp("type", value)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    typeOption.map((item, index) => {
                                        return (
                                            <Option value={item.key} key={item.key + index}>{item.value}</Option>
                                        )
                                    })
                                }
                                {/*<Option value="jack">Jack</Option>*/}
                                {/*<Option value="lucy">Lucy</Option>*/}
                                {/*<Option value="tom">Tom</Option>*/}
                            </Select>
                        </Col>
                    </Row>
                </Col>
                <Col span={3}>

                    {/*<Button type="primary" style={{width:"70%"}} onClick={() => props.search(props.searchParams)}>新增用户</Button>*/}
                    <CreateUser/>

                </Col>

            </Row>
            <div style={{marginTop:"10px"}}/>

            <Row justify="space-around" >
                <Col span={5}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>用户名</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                onChange={(e) => props.changeSearchParams(e, "user_id")}
                                placeholder="Basic usage"/>
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row justify={"space-around"} align="middle">
                        <Col span={6}>
                            <div>创建时间</div>
                        </Col>
                        <Col span={18}>
                            <DatePicker
                                onChange={(e, value)=>props.changeDate("create_at", value)}
                            />

                        </Col>
                    </Row>
                </Col>
                <Col span={5}>
                    {/*<Row justify={"space-between"} align="middle">*/}
                    {/*    <Col span={5}>*/}
                    {/*        <div>状态</div>*/}
                    {/*    </Col>*/}
                    {/*    <Col span={18}>*/}
                    {/*        <Input placeholder="Basic usage"/>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Col>
                <Col span={5}>
                    {/*<Row justify={"space-between"} align="middle">*/}
                    {/*    <Col span={5}>*/}
                    {/*        <div>类型</div>*/}
                    {/*    </Col>*/}
                    {/*    <Col span={18}>*/}
                    {/*        <Input placeholder="Basic usage"/>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Col>
                <Col span={3}>

                    <Button type="primary" style={{width:"70%"}} onClick={() => props.search(props.searchParams)}>搜索</Button>

                </Col>

            </Row>

            <Divider/>

        </Fragment>
    )
}

class UserTable extends Component {

    constructor(props) {
        super(props);
        props.search({})
        this.state = {
            route: props.route,
        }
    }


    columns = [
        {title: 'name', dataIndex: 'name', fixed: "left", width: 160, key: '1'},
        {title: 'user_id', dataIndex: 'user_id', key: '5'},

        {title: 'id', dataIndex: 'id', key: '0'},
        {title: 'password', dataIndex: 'password', key: '2'},
        {title: 'phone', dataIndex: 'phone', key: '3'},
        {
            title: 'state', width: 100, key: '4',
            render: (e) => {

                for (let i = 0; i < this.props.stateOption.length; i++) {
                    if (this.props.stateOption[i].key.toString() === e.state.toString()) {
                        return this.props.stateOption[i].value
                    }
                }
                return "未知状态"


            }


        },
        {
            title: 'type', width: 100, key: '5',
            render: (e) => {

                for (let i = 0; i < this.props.typeOption.length; i++) {
                    if (this.props.typeOption[i].key.toString() === e.type.toString()) {
                        return this.props.typeOption[i].value
                    }
                }
                return "未知类型"

            }

        },
        {title: 'create_at', dataIndex: 'create_at', key: '6'},
        {title: 'update_at', dataIndex: 'update_at', key: '7'},
        {
            title: '操作', key: '8', fixed: "right", width: 160, render: (e) => {
                // const time1 = e["create_at"];
                // const date =  new Date(time1)


                return (
                    <Row justify={"space-between"} align="middle">
                        <Col span={12}>

                            <Popconfirm
                                title="Are you sure to delete this task?"
                                onConfirm={() => {
                                    this.props.deleteUser(e.user_id)
                                }}
                                // onCancel={cancel}
                                okText="Yes"
                                cancelText="No"
                            >
                                <Button
                                    size={"small"}
                                    type="primary"
                                    danger
                                >
                                    删除
                                </Button>
                            </Popconfirm>
                        </Col>
                        <Col span={12}>
                            <Button
                                size={"small"}
                                type="primary"
                                onClick={() => this.props.openBox(e["user_id"])}
                            >详细信息</Button>


                        </Col>
                    </Row>
                )
            }
        },
    ]

    render() {
        const {route} = this.state;
        // const { location, children } = this.props;
        console.log("route ", route)
        return (
            <Fragment>
                <UserDetail/>
                {
                    searchT(this.props)
                }
                {/*<div onClick={() => this.props.search({})}>*/}
                {/*    change*/}
                {/*</div>*/}

                <Table
                    columns={this.columns}
                    dataSource={this.props.tableData.data}

                    rowKey={record => record["id"]}
                    pagination={this.props.pagination}
                    // loading={this.props.loading}
                    onChange={this.props.handleTableChange}

                    scroll={{x: 2500, y: 500}}
                />
                {/*<UserDetail/>*/}

            </Fragment>
        )
    }


}


const mapStateToProps = (state) => {
    const userData = state.get("user")


    // console.log("=== = = = ",state.getIn([ "home"]).get("tableData").get("data")!==undefined?state.getIn([ "home"]).get("tableData").get("data").toJS():"we")
    return {
        // currentPageUrl: state.get(["user", "baseUrl"]).toJS(),
        searchParams: userData.get("searchParams").toJS(),
        tableData: userData.get("tableData").toJS(),
        pagination: userData.get("pagination").toJS(),
        typeOption: userData.get("typeOption").toJS(),
        stateOption: userData.get("stateOption").toJS()
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeDate(key, value){
            dispatch(actionCreators.changeSearchParams(key, value))
        },
        deleteUser(user_id) {
            dispatch(actionCreators.deleteUserInfo(user_id))
        },
        openBox(user_id) {
            dispatch(actionCreators.getUserInfo(user_id))
            dispatch(actionCreators.changeVisible(true))
            dispatch(actionCreators.getDeviceInfo(user_id, 0,100))
        },
        changeOp(key, value) {
            // console.log(e)
            dispatch(actionCreators.changeSearchParams(key, value))
        },
        search(params) {
            // console.log(this.props.searchParams)
            dispatch(actionCreators.getListData(1, 10, params))
        },
        changeSearchParams(e, key) {
            const value = e.target.value
            console.log(key, value)
            dispatch(actionCreators.changeSearchParams(key, value))
        },
        handleTableChange(pagination1, filters, sorter) {
            // this.fetch({
            //     sortField: sorter.field,
            //     sortOrder: sorter.order,
            //     pagination,
            //     ...filters,
            // });
            // this.changeList("")
            // current: 3
            // pageSize: 10
            // total: 30

            dispatch(actionCreators.getListData(pagination1.current, pagination1.pageSize, {
                sortField: sorter.field,
                sortOrder: sorter.order,
                // pagination1,
                ...filters,
            }))


            // console.log(pagination1, filters, sorter)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(UserTable);
