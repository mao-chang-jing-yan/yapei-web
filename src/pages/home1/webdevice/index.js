import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Button, Col, Divider, Input, Row, Select, Table} from "antd";
import {actionCreators} from "./store";

const sensorTable = (props, data) => {
    const columns = [
        {title: '传感器ID', dataIndex: 'device_id', fixed: "left", width: 160, key: '1'},
        {title: '传感器类型', dataIndex: 'device_type', key: '5'},
        {title: '设备状态', dataIndex: 'device_state', key: '5'},
        {title: '创建时间', dataIndex: 'create_at', key: '5'},
        {title: '更新时间', dataIndex: 'update_at', key: '5'},
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
        {title: '创建时间', dataIndex: 'create_at', key: '5'},
        {title: '更新时间', dataIndex: 'update_at', key: '5'},
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
        {title: '创建时间', dataIndex: 'create_at', key: '5'},
        {title: '更新时间', dataIndex: 'update_at', key: '5'},
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
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>设备ID</div>
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
                            <div>clientid</div>
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
                <Col span={4}>
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

                    <Button type="primary" onClick={() => props.search(props.searchParams)}>搜索</Button>

                </Col>

            </Row>

            <Divider/>

        </Fragment>
    )
}
