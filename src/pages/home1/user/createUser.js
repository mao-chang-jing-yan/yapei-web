import React, {Component, Fragment} from "react";
import {Drawer, List, Avatar, Divider, Col, Row, Button, Modal, Input} from 'antd';
import {actionCreators} from "./store";
import {connect} from "react-redux";


class CreateUser extends Component{
    state = {
        visible : false
    }
    handleCancel = () => {
        // this.props.changeVisible(false)

        this.setState({
            visible: false,
        });
    };
    showModal = ()=>{
        this.setState({
            visible: true,
        });
    }

    render() {
        return (
            <Fragment>
                <Button type="primary" style={{width:"70%"}} onClick={this.showModal}>
                    创建用户
                </Button>
                <Modal
                    title="创建用户"
                    visible={this.state.visible}
                    // onOk={handleOk}
                    // confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                    width={300}
                >
                    {/*<p>{modalText}</p>*/}
                   <Row justify={"space-between"} align="middle">
                       <Col span={12}>
                           <Input style={{width:"90%"}} />
                       </Col>
                       <Col span={12}>
                           <Input style={{width:"90%"}} />
                       </Col>
                   </Row>
                </Modal>
            </Fragment>
        )
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
        stateOption: userData.get("stateOption").toJS()
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeVisible(bool) {
            dispatch(actionCreators.changeVisible(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(CreateUser);


