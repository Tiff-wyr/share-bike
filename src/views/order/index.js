/**
 * Created by Administrator on 2018/10/11 0011.
 */
import React,{Component} from 'react'
import { Form, Button,Select} from 'antd';
import index from "../../utils";
const FormItem = Form.Item;
const Option = Select.Option;

class Order extends Component {
    constructor(props) {
        super(props)
    }
    state={
        dataSource:[],
        isLoading:false
    }
    city=[
        {
            value:"北京",
            label:0
        },
        {
            value:"广州",
            label:1
        },
        {
            value:"上海",
            label:2
        },
    ]
    tableColumns = [
        {
            title:'订单编号',
            dataIndex:'order_sn',
            key: 'order_sn'
        },
        {
            title: '车辆编号',
            dataIndex: 'bike_sn',
            key: 'bike_sn'
        },
        {
            title: '用户名',
            dataIndex: 'user_name',
            key: 'user_name'
        },
        {
            title: '手机号',
            dataIndex: 'mobile',
            key: 'mobile'
        },
        {
            title: '里程',
            dataIndex: 'distance',
            render(distance){
                return distance/1000 + 'Km';
            },
            key: 'distance'
        },
        {
            title: '行驶时长',
            dataIndex: 'total_time',
            key: 'total_time'
        },
        {
            title: '状态',
            dataIndex: 'status',
            key: 'status'
        },
        {
            title: '开始时间',
            dataIndex: 'start_time',
            key: 'start_time'
        },
        {
            title: '结束时间',
            dataIndex: 'end_time',
            key: 'end_time'
        },
        {
            title: '订单金额',
            dataIndex: 'total_fee',
            key: 'total_fee'
        },
        {
            title: '实付金额',
            dataIndex: 'user_pay',
            key: 'user_pay'
        }
    ]
    orderData = [
        {
            label: '全部',
            id: 0
        },
        {
            label: '进行中',
            id: 1
        },
        {
            label: '结束行程',
            id: 2
        }
    ]

    render() {
        // const  {getFieldDecorator}= this.props.form
        return (
            <div>
                <Form layout="inline">
                    {/*<FormItem*/}
                      {/*label="城市">*/}
                        {/*<Select style={{width:150}}>*/}
                            {/*{this.city.map((item,index)=>*/}
                                {/*<Option value={item.value}>{item.value}</Option>*/}
                            {/*)}*/}
                        {/*</Select>*/}
                    {/*</FormItem>*/}
                    <FormItem
                    label="日期"
                    >


                    </FormItem>
                </Form>
            </div>
        )

    }
}
export default Order
