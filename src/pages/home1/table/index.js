import {Table} from 'antd';
import React, {Component, Fragment} from "react";
import reqwest from 'reqwest';
import axios from "axios";


const columns = [
    // {
    //     title: 'Full Name',
    //     width: 100,
    //     dataIndex: 'name',
    //     key: 'name',
    //     fixed: 'left',
    // },
    // {
    //     title: 'Age',
    //     width: 100,
    //     dataIndex: 'age',
    //     key: 'age',
    //     fixed: 'left',
    // },
    // {
    //     title: 'Column 1',
    //     dataIndex: 'address',
    //     key: '1',
    //     width: 150,
    // },
    // {
    //     title: 'Column 2',
    //     dataIndex: 'address',
    //     key: '2',
    //     width: 150,
    // },
    // {
    //     title: 'Column 3',
    //     dataIndex: 'address',
    //     key: '3',
    //     width: 150,
    // },
    // {
    //     title: 'Column 4',
    //     dataIndex: 'address',
    //     key: '4',
    //     width: 150,
    // },
    // {
    //     title: 'Column 5',
    //     dataIndex: 'address',
    //     key: '5',
    //     width: 150,
    // },
    // {
    //     title: 'Column 6',
    //     dataIndex: 'address',
    //     key: '6',
    //     width: 150,
    // },
    // {
    //     title: 'Column 7',
    //     dataIndex: 'address',
    //     key: '7',
    //     width: 150,
    // },
    {title: 'score', dataIndex: 'score', key: '0'},
    {title: 'time', dataIndex: 'time', key: '1'},
    {title: 'user_id', dataIndex: 'user_id', key: '2'},
    // {
    //     title: 'user_id',
    //     key: '2',
    //     fixed: 'right',
    //     width: 100,
    //     render: (e) => {
    //         console.log(e)
    //             return (
    //                 <a>action</a>
    //             )
    //     },
    // },
];

const data = [];
// for (let i = 0; i < 100; i++) {
//     data.push({
//         key: i,
//         name: `Edrward ${i}`,
//         age: 32,
//         address: `London Park no. ${i}`,
//     });
// }

//
// const getRandomuserParams = params => ({
//     results: params.pagination.pageSize,
//     page: params.pagination.current,
//     ...params,
//     se:"year",
//     num:10,
//     user_id:"mao"
// });

class TableTest extends Component {
    constructor(props) {
        super(props);
        this.state.columns = props.columns
        this.state.url = "http://127.0.0.1:8002/api/v1" + props.uri
        this.state.prop_params = props.params
    }

    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
        key:"",
        prop_params:{},
        url: '',

    };

    componentDidMount() {
        const {pagination} = this.state;
        this.fetch({pagination});
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };
    getRandomuserParams = params => ({
        size: params.pagination.pageSize,
        index: params.pagination.current,
        ...params,
        ...this.state.prop_params,
        // se: "year",
        // num: 10,
        // user_id: "mao"
    });
    fetch = (params = {}) => {
        this.setState({loading: true});
        reqwest({
            url: this.state.url,
            method: 'get',
            type: 'json',
            data: this.getRandomuserParams(params),
        }).then(data => {
            console.log(data);
            this.setState({
                loading: false,
                data: data.data,
                pagination: {
                    ...params.pagination,
                    total: data.num-1,
                    // 200 is mock data, you should read it from server
                    // total: data.totalCount,
                },
            });
        });
    };


    render() {
        const {data, pagination, loading, columns, key} = this.state;
        return (
            <Fragment>
                <Table
                    columns={columns}
                    dataSource={data}

                    rowKey={record => record[key]}
                    pagination={pagination}
                    loading={loading}
                    onChange={this.handleTableChange}

                    scroll={{x: 500, y: 500}}
                />
            </Fragment>

        )
    }
}


// ReactDOM.render(
//     <Table columns={columns} dataSource={data} scroll={{x: 1500, y: 300}}/>,
//     mountNode,
// );

export default TableTest
