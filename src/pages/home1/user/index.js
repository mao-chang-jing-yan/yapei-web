import React, {Component, Fragment, PureComponent} from "react";
import {Row, Col, Divider, Input, Button, Select} from 'antd';

import {connect} from "react-redux";
import {actionCreators} from "./store";
import {Table} from "antd";
import UserDetail from "./detail";
import {changeVisible} from "./store/actionCreators";


const searchT = (props) => {
    const typeOption = [
        {key:"-2",value:"所有用户"},
        {key:"0",value:"普通用户"},
        {key:"1",value:"管理员"},
        {key:"2",value:"后台操作员"},
        // {key:"3",value:""},
    ]
    const stateOption = [
        {key:"-1",value:"不存在"},
        {key:"0",value:"已删除"},
        {key:"1",value:"正常"},
    ]
    const Option = Select.Option;

    return (
        <Fragment>



            <Row justify="space-around">
                <Col span={4}>
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
                <Col span={4}>
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
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>状态</div>
                        </Col>
                        <Col span={18}>
                            <Select
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={(value)=>props.changeOp("state", value)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    stateOption.map((item, index)=>{
                                        return(
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
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>类型</div>
                        </Col>
                        <Col span={18}>
                            <Select
                                showSearch
                                style={{ width: "100%" }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={(value)=>props.changeOp("type", value)}
                                // onFocus={onFocus}
                                // onBlur={onBlur}
                                // onSearch={onSearch}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    typeOption.map((item, index)=>{
                                        return(
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
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>233</div>
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

            </Row>

            <Row justify="space-around">
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>yuzhou</div>
                        </Col>
                        <Col span={18}>
                            <Input placeholder="Basic usage"/>
                        </Col>
                    </Row>
                </Col>
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>电话</div>
                        </Col>
                        <Col span={18}>
                            <Input placeholder="Basic usage"/>
                        </Col>
                    </Row>
                </Col>
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>状态</div>
                        </Col>
                        <Col span={18}>
                            <Input placeholder="Basic usage"/>
                        </Col>
                    </Row>
                </Col>
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>类型</div>
                        </Col>
                        <Col span={18}>
                            <Input placeholder="Basic usage"/>
                        </Col>
                    </Row>
                </Col>
                <Col span={4}>

                    <Button type="primary" onClick={()=>props.search(props.searchParams)}>搜索</Button>

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
        {title: 'user_id', dataIndex: 'user_id', fixed: "left", key: '5'},
        {title: 'name', dataIndex: 'name', fixed: "left", key: '1'},

        {title: 'id', dataIndex: 'id', key: '0'},
        {title: 'password', dataIndex: 'password', key: '2'},
        {title: 'phone', dataIndex: 'phone', key: '3'},
        {title: 'state', dataIndex: 'state', key: '4'},
        {title: 'create_at', dataIndex: 'create_at', key: '6'},
        {title: 'update_at', dataIndex: 'update_at', key: '7'},
        {
            title: '操作', key: '8', fixed: "right", width: 300, render: (e) => {
                // const time1 = e["create_at"];
                // const date =  new Date(time1)


                return (
                    <div onClick={()=>this.props.openBox(e["user_id"])}>
                        "23"
                    </div>
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

                    scroll={{x: 1500, y: 500}}
                />

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
        pagination: userData.get("pagination").toJS()
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        openBox(user_id){
            dispatch(actionCreators.changeVisible(true))
            dispatch(actionCreators.getUserInfo(user_id))
        },
        changeOp(key, value){
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
