import React, {Component, Fragment} from "react";
import {Drawer, List, Avatar, Divider, Col, Row, Table, Dropdown, Space, Badge} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";
import CreateUser from "./createUser";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";

export const DescriptionItem = ({title, content}) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title} :&nbsp;{content}</p>
    </div>
);

class UserDetail extends Component {
    expandedRowRender = (data) => {
        const columns = [
            {title: 'Date', dataIndex: 'date', key: 'date'},
            {title: 'Name', dataIndex: 'name', key: 'name'},
            {
                title: 'Status',
                key: 'state',
                render: () => (
                    <span>
            <Badge status="success"/>
            Finished
          </span>
                ),
            },
            {title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum'},
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Space size="middle">
                        <a>Pause</a>
                        <a>Stop</a>
                        {/*<Dropdown overlay={menu}>*/}
                        {/*    <a>*/}
                        {/*        More <DownOutlined />*/}
                        {/*    </a>*/}
                        {/*</Dropdown>*/}
                    </Space>
                ),
            },
        ];

        // const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i,
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
        return <Table columns={columns} dataSource={data} pagination={false}/>;
    };

    // state = {visible: false};

    showDrawer = () => {
        this.props.changeVisible(true)
        // this.setState({
        //     visible: true,
        // });
    };

    onClose = () => {
        this.props.changeVisible(false)

        // this.setState({
        //     visible: false,
        // });
    };
    columns = [
        {title: '设备ID', dataIndex: 'device_id', key: '1'},
        {title: 'clientID', dataIndex: 'client_id', key: '2'},
        {title: '设备类型', dataIndex: 'device_type', key: '3'},
        {title: '设备状态', dataIndex: 'device_state', key: '4'},
    ]

    render() {
        const {userInfo} = this.props
        let stateName = "未知状态"
        let typeName = "未知类型"
        for (let i = 0; i < this.props.stateOption.length; i++) {
            if (userInfo.state !== undefined && this.props.stateOption[i].key.toString() === userInfo.state.toString()) {
                stateName = this.props.stateOption[i].value
                break
            }
        }
        for (let i = 0; i < this.props.typeOption.length; i++) {
            if (userInfo.type !== undefined && this.props.typeOption[i].key.toString() === userInfo.type.toString()) {
                typeName = this.props.typeOption[i].value
                break
            }
        }

        return (
            <>
                <Drawer
                    width={800}
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.props.visible}
                >
                    <p className="site-description-item-profile-p" style={{marginBottom: 24}}>
                        用户信息
                    </p>
                    <p className="site-description-item-profile-p">基本信息</p>


                    <Row>
                        <Col span={12}>
                            <DescriptionItem title={"姓名"} content={userInfo.name}/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title={"电话"} content={userInfo.phone}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title={"身份证号"} content={userInfo.id_card}/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title={"状态"} content={stateName}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title={"类型"} content={typeName}/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title={"邮箱"} content={userInfo.email}/>
                        </Col>
                    </Row>

                    <Divider/>
                    <p className="site-description-item-profile-p">设备列表</p>


                    <Table
                        columns={this.columns}
                        dataSource={this.props.deviceInfo === null ? [] : this.props.deviceInfo.data}

                        rowKey={record => record["device_id"]}
                        // pagination={this.props.pagination}
                        // loading={this.props.loading}
                        // onChange={this.props.handleTableChange}
                        expandable={{
                            expandedRowRender: record => hardDeviceTable(this.props,record.hard_device_list),
                            rowExpandable: record => record.device_id !== 'Not Expandable' && record.hard_device_list.length>0,
                        }}
                        // scroll={{x: 700, y: 500}}
                    />


                </Drawer>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const userData = state.get("user")


    // console.log("=== = = = ",state.getIn([ "home"]).get("tableData").get("data")!==undefined?state.getIn([ "home"]).get("tableData").get("data").toJS():"we")
    return {
        // currentPageUrl: state.get(["user", "baseUrl"]).toJS(),
        // searchParams: userData.get("searchParams").toJS(),
        // tableData: userData.get("tableData").toJS(),
        // pagination: userData.get("pagination").toJS(),
        visible: userData.get("visible"),
        userInfo: userData.get("userInfo").toJS(),
        typeOption: userData.get("typeOption").toJS(),
        stateOption: userData.get("stateOption").toJS(),
        deviceInfo: userData.get("deviceInfo").toJS()
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeVisible(bool) {
            dispatch(actionCreators.changeVisible(bool))
        },
        handleTableChange() {

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(UserDetail);

const sensorTable = (props, data) => {
    const columns = [
        {title: '传感器ID', dataIndex: 'device_id', fixed: "left", width: 160, key: '1'},
        {title: '类型', dataIndex: 'device_type', key: '5'},
        {title: '状态', dataIndex: 'device_state', key: '5'},
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
        {title: '类型', dataIndex: 'device_type', key: '5'},
        {title: '状态', dataIndex: 'device_state', key: '5'},
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
