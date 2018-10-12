/**
 * Created by Administrator on 2018/10/11 0011.
 */
import React,{Component} from 'react'
import {Card} from 'antd'
// 引入 ECharts 主模块
import echarts  from 'echarts/lib/echarts';
import ReactEchartsCore from 'echarts-for-react/lib/core'
// 引入柱状图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import './index.less'

class Bar extends Component {
    constructor(props) {
        super(props)
    }


    render() {
       const data=[1000, 520, 2000, 3340, 3900, 3300, 2200]
        var yMax = 4000;
        var dataShadow = [];
        for (var i = 0; i < data.length; i++) {
            dataShadow.push(yMax);
        }

       const bar1 = {
            title:{
                text:'OFO周订单'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                { // For shadow
                    type: 'bar',
                    itemStyle: {
                        normal: {color: 'rgba(0,0,0,0.05)'}
                    },
                    barGap:'-100%',
                    barCategoryGap:'40%',
                    barWidth:'40%',
                    data: dataShadow,
                    animation: false
                },
                {
                    name:'OfO周订单',
                    barWidth: '40%',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#83bff6'},
                                    {offset: 0.5, color: '#188df0'},
                                    {offset: 1, color: '#28ddf0'}
                                ]
                            )
                        },
                        emphasis: {
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#2378f7'},
                                    {offset: 0.7, color: '#2378f7'},
                                    {offset: 1, color: '#83bff6'}
                                ]
                            )
                        }
                    },
                    data: data
                }
            ]
        };
        const bar2={
            title:{
                text:'共享单车周订单',

            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data:['小黄','摩拜','小蓝']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [

                {
                    name:'小黄',
                    type:'bar',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'摩拜',
                    type:'bar',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'小蓝',
                    type:'bar',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                ]
        }

        return (
            <div className="bar">
                <Card
                    title='条形图1'
                >
                    <ReactEchartsCore
                       option={bar1}
                       echarts={echarts}
                       style={{width:600,height:300}}
                    >
                    </ReactEchartsCore>
                </Card>
                <Card
                    title='条形图2'
                    style={{marginTop:20}}
                >
                    <ReactEchartsCore
                        option={bar2}
                        echarts={echarts}
                        style={{width:600,height:300}}
                    >
                    </ReactEchartsCore>
                </Card>

            </div>
        )

    }
}

export default Bar
