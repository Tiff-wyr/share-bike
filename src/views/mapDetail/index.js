/**
 * Created by Administrator on 2018/10/12 0012.
 */
import React,{Component} from 'react'
import Header from '../../components/header/mapHeader'
import './index.less'
import axios from '../../utils/axios'

class MapDetail extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount(){
        this.getData()
    }
    getData(){
        const {id}=this.props.match.params
        axios.get('order/detail',{params:id}).then(res=>{
            console.log(res.result);
            let data=res.result;
            this.initMap(data)
        })
    }
    //初始化地图
    initMap(data) {
        const BMap = window.BMap
        var map = new BMap.Map("container");          // 创建地图实例
        let startPoint = new BMap.Point(data.position_list[0].lon, data.position_list[0].lat)  // 创建开始点坐标
        let endPoint = new BMap.Point(data.position_list[data.position_list.length - 1].lon, data.position_list[data.position_list.length - 1].lat)  // 创建结束点坐标
        map.centerAndZoom(startPoint, 15);
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        //添加控件
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());



        // function addMarker(point, index) {  // 创建图标对象
        //     var myIcon = new BMap.Icon("./start_point.png", new BMap.Size(23, 25), {
        //         anchor: new BMap.Size(10, 25),
        //         imageOffset: new BMap.Size(0, 0 - index * 25)   // 设置图片偏移
        //     });
        //     var marker = new BMap.Marker(point, {icon: myIcon});
        //     map.addOverlay(marker);
        // }

    }
    render() {
        return (
            <div>
                <Header></Header>
                <div className="container" id="container">
                </div>

            </div>
        )

    }
}

export default MapDetail
