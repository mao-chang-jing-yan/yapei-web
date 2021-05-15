import React, {Component} from "react";
import {Drawer, List, Avatar, Divider, Col, Row} from 'antd';
import {connect} from "react-redux";
import {actionCreators} from "./store";

const DescriptionItem = ({title, content}) => (
    <div className="site-description-item-profile-wrapper">
        <p className="site-description-item-profile-p-label">{title}:</p>
        {content}
    </div>
);

class UserDetail extends Component {
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

    render() {
        return (
            <>
                <Drawer
                    width={640}
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.props.visible}
                >
                    <p className="site-description-item-profile-p" style={{marginBottom: 24}}>
                        User Profile
                    </p>
                    <p className="site-description-item-profile-p">Personal</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Full Name" content="Lily"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Account" content="AntDesign@example.com"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="City" content="HangZhou"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Country" content="China🇨🇳"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Birthday" content="February 2,1900"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Website" content="-"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Message"
                                content="Make things as simple as possible but no simpler."
                            />
                        </Col>
                    </Row>
                    <Divider/>
                    <p className="site-description-item-profile-p">Company</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Position" content="Programmer"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Responsibilities" content="Coding"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Department" content="XTech"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Supervisor" content={<a>Lin</a>}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Skills"
                                content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
                            />
                        </Col>
                    </Row>
                    <Divider/>
                    <p className="site-description-item-profile-p">Contacts</p>
                    <Row>
                        <Col span={12}>
                            <DescriptionItem title="Email" content="AntDesign@example.com"/>
                        </Col>
                        <Col span={12}>
                            <DescriptionItem title="Phone Number" content="+86 181 0000 0000"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <DescriptionItem
                                title="Github"
                                content={
                                    <a href="http://github.com/ant-design/ant-design/">
                                        github.com/ant-design/ant-design/
                                    </a>
                                }
                            />
                        </Col>
                    </Row>
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
        userInfo: userData.get("userInfo").toJS()
    }
}
const mapDispatchToProp = (dispatch) => {
    return {
        changeVisible(bool) {
            dispatch(actionCreators.changeVisible(bool))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(UserDetail);

