import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Button, Col, DatePicker, Divider, Input, Row, Select, Table} from "antd";
import {actionCreators} from "./store";
import {dateFormat} from "../../../component/dateFormat";
import CreateUser from "../user/createUser";

const sensorTable = (props, data) => {
    const columns = [
        {title: '传感器ID', dataIndex: 'device_id', fixed: "left", width: 160, key: '1'},
        {title: '传感器类型', dataIndex: 'device_type', key: '5'},
        {title: '设备状态', dataIndex: 'device_state', key: '5'},
        {title: '创建时间', key: '5',render: (e) => {return (<div>{dateFormat(e.create_at)}</div>)}},
        {title: '更新时间', key: '5',render: (e) => {return (<div>{dateFormat(e.update_at)}</div>)}},
        {
            title: '操作', key: '5', render: (e) => {
                return (
                    <div>
                        禁用、远程操作、、、
                    </div>
                )

            }
        },
    ]

    return (<Fragment>
        <Table
            columns={columns}
            dataSource={data}

            rowKey={record => record["device_id"]}
            // pagination={pagination}
            // loading={this.props.loading}
            // onChange={handleTableChange}
            // scroll={{x: 2500, y: 500}}

        />
    </Fragment>)
}

const hardDeviceTable = (props, data) => {

    const columns = [
        {title: '硬件设备ID', dataIndex: 'device_id', fixed: "left", width: 160, key: '1'},
        {title: '设备类型', dataIndex: 'device_type', key: '5'},
        {title: '设备状态', dataIndex: 'device_state', key: '5'},
        {title: '创建时间', key: '5',render: (e) => {return (<div>{dateFormat(e.create_at)}</div>)}},
        {title: '更新时间', key: '5',render: (e) => {return (<div>{dateFormat(e.update_at)}</div>)}},
        {
            title: '操作', key: '5', render: (e) => {
                return (
                    <div>
                        禁用、远程操作、、、
                    </div>
                )

            }
        },
    ]

    return (<Fragment>
        <Table
            columns={columns}
            dataSource={data}

            rowKey={record => record["device_id"]}
            expandable={{
                expandedRowRender: record => sensorTable(props, record.sensor_list),
                rowExpandable: record => record.device_id !== 'Not Expandable' && record.sensor_list.length>0,
            }}
            // pagination={pagination}
            // loading={this.props.loading}
            // onChange={handleTableChange}
            // scroll={{x: 2500, y: 500}}

        />
    </Fragment>)
}

class WebDevice extends Component {
    columns = [
        {title: '背夹ID', dataIndex: 'device_id', fixed: "left", width: 160, key: '1'},
        {title: '设备类型', dataIndex: 'device_type', key: '5'},
        {title: '设备状态', dataIndex: 'device_state', key: '5'},
        {title: 'client_id', dataIndex: 'client_id', key: '5'},
        {title: '创建时间', key: '5',render: (e) => {return (<div>{dateFormat(e.create_at)}</div>)}},
        {title: '更新时间', key: '5',render: (e) => {return (<div>{dateFormat(e.update_at)}</div>)}},
        {
            title: '操作', key: '5', render: (e) => {
                return (
                    <div>
                        禁用、远程操作、、、
                    </div>
                )

            }
        },


    ]

    render() {
        return (
            <Fragment>
                {
                    searchT(this.props)
                }
                <Table
                    columns={this.columns}
                    dataSource={this.props.tableData.data}

                    rowKey={record => record["device_id"]}
                    pagination={this.props.pagination}
                    // loading={this.props.loading}
                    expandable={{
                        expandedRowRender: record => hardDeviceTable(this.props, record.hard_device_list),
                        rowExpandable: record => record.device_id !== 'Not Expandable' && record.hard_device_list.length>0,
                    }}
                    onChange={this.props.handleTableChange}

                    // scroll={{x: 2500, y: 500}}
                />
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.search(this.props.searchParams)
    }

}


const mapStateToProps = (state) => {

    return {
        tableData: state.getIn(["webDevice", "tableData"]).toJS(),
        pagination: state.getIn(["webDevice", "pagination"]).toJS(),
        searchParams: state.getIn(["webDevice", "searchParams"]).toJS(),

        typeOption: state.getIn(["webDevice", "typeOption"]).toJS(),
        stateOption: state.getIn(["webDevice", "stateOption"]).toJS()
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeDate(key, value){
            dispatch(actionCreators.changeSearchParams(key, value))
        },
        handleTableChange(pagination1, filters, sorter) {
            dispatch(actionCreators.getWebDeviceList(pagination1.current, pagination1.pageSize, {
                sortField: sorter.field,
                sortOrder: sorter.order,
                // pagination1,
                ...filters,
            }))

        },
        changeOp(key, value) {
            // console.log(e)
            dispatch(actionCreators.changeSearchParams(key, value))
        },
        search(params) {
            // console.log(this.props.searchParams)
            dispatch(actionCreators.getWebDeviceList(1, 10, params))
        },
        changeSearchParams(e, key) {
            const value = e.target.value
            console.log(key, value)
            dispatch(actionCreators.changeSearchParams(key, value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(WebDevice);


const searchT = (props) => {
    const typeOption = props.typeOption
    const stateOption = props.stateOption
    const Option = Select.Option;

    return (
        <Fragment>


            <Row justify="space-around">
                <Col span={5}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>名称</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                placeholder="ram_name"
                                value={props.searchParams.ram_name}
                                onChange={(e) => props.changeSearchParams(e, "ram_name")}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>组名</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                placeholder="分组"
                                value={props.searchParams.group_name}
                                onChange={(e) => props.changeSearchParams(e, "group_name")}
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
                            <Input
                                placeholder="背夹类型"
                                value={props.searchParams.device_type}
                                onChange={(e) => props.changeSearchParams(e, "device_type")}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={3}>

                    <Button type="primary" style={{width:"70%"}} onClick={() => props.search(props.searchParams)}>新增用户</Button>
                    {/*<CreateUser/>*/}

                </Col>

            </Row>
            <div style={{marginTop:"10px"}}/>

            <Row justify="space-around" >
                <Col span={5}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>用户ID</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                onChange={(e) => props.changeSearchParams(e, "user_id")}
                                placeholder="当前用户"/>
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
                                placeholder="选择时间"
                                style={{width:"100%"}}
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
