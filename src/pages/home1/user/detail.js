import React, {Component, Fragment} from "react";
import {Drawer, List, Avatar, Divider, Col, Row, Table, Dropdown, Space, Badge} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";
import CreateUser from "./createUser";
import DownOutlined from "@ant-design/icons/lib/icons/DownOutlined";
import {dateFormat} from "../../../component/dateFormat";

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
        {title: '??????ID', dataIndex: 'device_id', key: '1'},
        {title: 'clientID', dataIndex: 'client_id', key: '2'},
        {title: '????????????', dataIndex: 'device_type', key: '3'},
        {title: '????????????', dataIndex: 'device_state', key: '4'},
    ]

    render() {
        const {userInfo} = this.props
        let stateName = "????????????"
        let typeName = "????????????"
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
                        ????????????
                    </p>
                    <p className="site-description-item-profile-p">????????????</p>


                    <Row>
                        <Col span={12}>
                            <DescriptionItem title={"??????"} content={userInfo.name}/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title={"??????"} content={userInfo.phone}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title={"????????????"} content={userInfo.id_card}/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title={"??????"} content={stateName}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title={"??????"} content={typeName}/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title={"??????"} content={userInfo.email}/>
                        </Col>
                    </Row>

                    <Divider/>
                    <p className="site-description-item-profile-p">????????????</p>


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
        {title: '?????????ID', dataIndex: 'device_id', fixed: "left", width: 160, key: '1'},
        {title: '??????', dataIndex: 'device_type', key: '5'},
        {title: '??????', dataIndex: 'device_state', key: '5'},
        {title: '????????????', key: '5',render: (e) => {return (<div>{dateFormat(e.create_at)}</div>)}},
        {title: '????????????', key: '5',render: (e) => {return (<div>{dateFormat(e.update_at)}</div>)}},
        {
            title: '??????', key: '5', render: (e) => {
                return (
                    <div>
                        ??????????????????????????????
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
        {title: '????????????ID', dataIndex: 'device_id', fixed: "left", width: 160, key: '1'},
        {title: '??????', dataIndex: 'device_type', key: '5'},
        {title: '??????', dataIndex: 'device_state', key: '5'},
        {title: '????????????', key: '5',render: (e) => {return (<div>{dateFormat(e.create_at)}</div>)}},
        {title: '????????????', key: '5',render: (e) => {return (<div>{dateFormat(e.update_at)}</div>)}},
        {
            title: '??????', key: '5', render: (e) => {
                return (
                    <div>
                        ??????????????????????????????
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
