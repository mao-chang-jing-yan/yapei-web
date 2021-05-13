import React, {Component, Fragment} from 'react';
import store from "../../store"
import {globalData} from "../../globaldata/globaldata";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {CreateChangeAction} from "../../store/actionCreators";
// import {we} from "../../store/actionCreators";

// import axios from "axios";
// axios.get("http://127.0.0.1:8002/").then(res => {
//     console.log(res)
// }).catch(err => {
//     // alert(err)
// })

class Home extends Component {
    cancelSub = () => {};

    // constructor(props) {
    //     super(props);
        // this.state = store.getState();
        // // globalData.baseURL = 12
        // console.log(globalData)

    // }

    // componentDidMount() {
    //     //订阅模式
    //     this.cancelSub = store.subscribe(() => {
    //         this.setState(store.getState());
    //     });
    //     // const w = we()
    //     // store.dispatch(w)
    //
    // }
    // componentWillUnmount() {
    //     this.cancelSub();
    // }

    render() {

        return (

            <Fragment>
                23123
                {this.props.id==null?"":this.props.id}
                <div onClick={this.props.set}>we</div>
            </Fragment>
        );
    }

    // set() {
    //     const action = {
    //         type: 123,
    //         value: "wefdsf"
    //     }
    //     store.dispatch(action)
    //
    //
    // }


    storeChange() {
        this.setState(store.getState())
    }
}

const mapStateToProps = (state)=>{
    return {
        we:state.inputValue,
        id:state.id
    }
}
const mapDispatchToProp = (dispatch)=>{
    return{
        set(){
            const action = CreateChangeAction()
            dispatch(action)
            console.log("234")
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Home);

