import {Component} from 'react';

class MyComponent extends Component {
    cancelSub = () => {};


    constructor(props) {
        super(props);
        const store = this.props.store;
        this.state = store.getState();


    }



    componentDidMount() {
        //订阅模式
        this.cancelSub = this.state.store.subscribe(() => {
            this.setState(this.state.store.getState());
        });
    }

    componentWillUnmount() {
        this.cancelSub();
    }


}


export default MyComponent

