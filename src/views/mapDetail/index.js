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
        this.map=map;
        let startPoint = new BMap.Point(data.position_list[0].lon, data.position_list[0].lat)  // 创建开始点坐标
        let endPoint = new BMap.Point(data.position_list[data.position_list.length - 1].lon, data.position_list[data.position_list.length - 1].lat)  // 创建结束点坐标
        map.centerAndZoom(startPoint, 15);
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        //添加控件
        map.addControl(new BMap.NavigationControl());
        map.addControl(new BMap.ScaleControl());
        map.addControl(new BMap.OverviewMapControl());
        //自定义开始标注图标
        let startIcon=new BMap.Icon('start_point.png',new BMap.Size(38,41),{
            imageSize:new BMap.Size(38,41)
        })
        //结束图标
        let endIcon=new BMap.Icon('end_point.png',new BMap.Size(38,41),{
            imageSize:new BMap.Size(38,41)
        })
        var markerStart = new BMap.Marker(startPoint, {icon: startIcon});
        var markerEnd = new BMap.Marker(endPoint, {icon: endIcon});
        map.addOverlay(markerStart);
        map.addOverlay(markerEnd);
        //起点终点折线
        let linedata = data.position_list.map(item => {
            return new BMap.Point(item.lon, item.lat)
        })
        let polyLine = new BMap.Polyline(
            linedata,
            {strokeColor:"#ff0605", strokeWeight:3}
        )
        map.addOverlay(polyLine)

        // /**绘制服务区*/
        let gondata = data.area.map(item => {
            return new BMap.Point(item.lon, item.lat)
        })
        let polygon = new BMap.Polygon(
            gondata,
            {fillColor: '#10ff13',strokeColor: '#ffff0a',fillOpacity: .5 }
        )
        map.addOverlay(polygon)

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
