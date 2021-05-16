import React, { Fragment, PureComponent} from "react";
import {renderRoutes} from "react-router-config";

class WebDeviceIndex  extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            route: props.route,
        }
    }

    render() {
        const {route} = this.state;
        // const children = route.children
        // const children = []
        // for (let i = 0; i < route.children.length; i++) {
        //     const ro = route.children[i]
        //     ro.path = route.path + ro.path
        //     children.push(ro)
        // }
        console.log("route", route)

        // const { location, children } = this.props;
        // console.log("---- ",route)
        return (
            <Fragment>
                {renderRoutes(route.children)}
                {/*{renderRoutes(children)}*/}
                {/*{route.children.render()}*/}
            </Fragment>
        )
    }
}

export default WebDeviceIndex
