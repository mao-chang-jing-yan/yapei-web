import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import {Button, Col, DatePicker, Divider, Input, Row, Select, Table} from "antd";
import {actionCreators} from "./store";
import {dateFormat} from "../../../component/dateFormat";


const productTable = (props, data) => {

    const columns = [
        {title: '产品ID', dataIndex: 'product_id', fixed: "left", width: 160, key: '1'},
        {title: '产品类型', dataIndex: 'type', key: '5'},
        {title: '版本号', dataIndex: 'tag', key: '5'},
        {title: '设备类型', dataIndex: 'device_type', key: '5'},
        {title: '设备状态', dataIndex: 'state', key: '5'},
        {title: '创建时间', key: '5',render: (e) => {return (<div>{dateFormat(e.create_at)}</div>)}},
        {title: '更新时间', key: '5', render: (e) => {return (<div>{dateFormat(e.update_at)}</div>)}},
        {
            title: '操作', key: '5', render: (e) => {
                // const t = new Date(e.create_at)

                return (
                    <div key={e.product_id}>
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

            rowKey={record => record["product_id"]}
            // expandable={{
            //     expandedRowRender: record => sensorTable(props, record.sensor_list),
            //     rowExpandable: record => record.device_id !== 'Not Expandable' && record.sensor_list.length>0,
            // }}
            pagination={{
                // pageSize: 10,

                total: data.length
            }
                // current: 1,
            }
            // loading={this.props.loading}
            // onChange={handleTableChange}
            // scroll={{x: 2500, y: 500}}

        />
    </Fragment>)
}

class Supplier extends Component {
    columns = [
        {title: '供应商ID', dataIndex: 'supplier_id', fixed: "left", width: 160, key: '1'},
        {title: '供应商名称', dataIndex: 'name', key: '5'},
        {title: '供应商代码', dataIndex: 'code', key: '5'},
        {title: '创建时间', key: '5',render: (e) => {return (<div>{dateFormat(e.create_at)}</div>)}},
        {title: '更新时间', key: '5',render: (e) => {return (<div>{dateFormat(e.update_at)}</div>)}},
        {
            title: '操作', key: '5',fixed: "right", width:200, render: (e) => {
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

                    rowKey={record => record["supplier_id"]}
                    pagination={this.props.pagination}
                    // loading={this.props.loading}
                    expandable={{
                        expandedRowRender: record => productTable(this.props, record.product_list),
                        rowExpandable: record => record._id !== 'Not Expandable' && record.product_list.length>0,
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
        tableData: state.getIn(["supplier", "tableData"]).toJS(),
        pagination: state.getIn(["supplier", "pagination"]).toJS(),
        searchParams: state.getIn(["supplier", "searchParams"]).toJS(),

        typeOption: state.getIn(["supplier", "typeOption"]).toJS(),
        stateOption: state.getIn(["supplier", "stateOption"]).toJS()
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
            console.log(params)
            dispatch(actionCreators.getWebDeviceList(1, 10, params))
        },
        changeSearchParams(e, key) {
            const value = e.target.value
            console.log(key, value)
            dispatch(actionCreators.changeSearchParams(key, value))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Supplier);


const searchT = (props) => {
    const stateOption = props.stateOption
    const Option = Select.Option;

    return (
        <Fragment>


            <Row justify="space-around">
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>ID</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                placeholder="Basic usage"
                                value={props.searchParams.supplier_id}
                                onChange={(e) => props.changeSearchParams(e, "supplier_id")}
                            />
                        </Col>
                    </Row>
                </Col>
                <Col span={4}>
                    <Row justify={"space-between"} align="middle">
                        <Col span={5}>
                            <div>名称</div>
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
                            <div>代码</div>
                        </Col>
                        <Col span={18}>
                            <Input
                                placeholder="Basic usage"
                                value={props.searchParams.code}
                                onChange={(e) => props.changeSearchParams(e, "code")}
                            />
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
                                style={{width:"100%"}}
                                onChange={(e, value)=>props.changeDate("create_at", value)}
                            />

                        </Col>
                    </Row>
                </Col>
                {/*<Col span={4}>*/}
                {/*    <Button type="primary" style={{width:"100%"}} onClick={() => props.search(props.searchParams)}>搜索</Button>*/}
                {/*</Col>*/}
                <Col span={4}>
                    <Button type="primary" style={{width:"100%"}} onClick={() => props.search(props.searchParams)}>搜索</Button>
                </Col>

            </Row>



            <Divider/>

        </Fragment>
    )
}
