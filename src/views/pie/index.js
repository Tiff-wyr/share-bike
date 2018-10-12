/**
 * Created by Administrator on 2018/10/11 0011.
 */
import React,{Component} from 'react'
import {Card} from 'antd'
// 引入 ECharts 主模块
import echarts  from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core'
// 引入饼状图
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/legend'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.less'


class Pie extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const pie1={
            title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['周一','周二','周三','周四','周五','周六','周天']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'周一'},
                        {value:310, name:'周二'},
                        {value:234, name:'周三'},
                        {value:335, name:'周四'},
                        {value:548, name:'周五'},
                        {value:548, name:'周六'},
                        {value:448, name:'周天'},
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };
        const pie2={
            title : {
                text: '某站点用户访问来源',
                x:'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                x: 'left',
                data: ['周一','周二','周三','周四','周五','周六','周天']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'周一'},
                        {value:310, name:'周二'},
                        {value:234, name:'周三'},
                        {value:335, name:'周四'},
                        {value:548, name:'周五'},
                        {value:548, name:'周六'},
                        {value:448, name:'周天'},
                    ]
                }
            ]
        };

        return (
            <div>
                <Card
                    title='饼状图1'
                >
                    <ReactEchartsCore
                        option={pie1}
                        echarts={echarts}
                    >
                    </ReactEchartsCore>
                </Card>
                <Card
                    title='饼状图2'
                >
                    <ReactEchartsCore
                        option={pie2}
                        echarts={echarts}
                    >
                    </ReactEchartsCore>
                </Card>
            </div>
        )

    }
}

export default Pie
