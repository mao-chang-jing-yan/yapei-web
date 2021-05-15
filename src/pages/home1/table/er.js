import React, {Fragment, Component} from "react";
import {Col, Divider, Input, Row} from "antd";


class TableSearch extends Component {
    state = {
        name: "",

        inputValues: {
            name: "",
            phone: "",
        }
    }


    change(e, name) {
        this.setState(()=>{
            const inputValues = this.state.inputValues;
            console.log(e.target)
            inputValues.name = e.target.value

            return{
                inputValues:inputValues
            }
        })
    }


    render() {
        // const { data, pagination, loading } = this.state;
        return (
            <Fragment>
                <Row gutter={16}>
                    <Col className="gutter-row" span={6}>
                        <Row gutter={16} justify="space-around" align="middle">
                            <Col span={5}>
                                <div>姓名</div>
                            </Col>
                            <Col span={19}>
                                <Input placeholder="Basic usage"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <Row gutter={16} justify="space-around" align="middle">
                            <Col span={5}>
                                <div>电话</div>
                            </Col>
                            <Col span={19}>
                                <Input placeholder="Basic usage" value={this.state.inputValues.name}
                                       onChange={(e) => this.change(e, "name")}/>
                            </Col>
                        </Row>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div>col-6</div>
                    </Col>
                    <Col className="gutter-row" span={6}>
                        <div>col-6</div>
                    </Col>


                </Row>

            </Fragment>
        )
    }
}

export default TableSearch
