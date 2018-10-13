/**
 * Created by Administrator on 2018/10/12 0012.
 */
import React,{Component} from 'react'
import './mapHeader.less'

class MapHeader extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="mapHeader clearfix">
                <div className="w1170 map">
                    <div className="title fll">共享单车详情</div>
                    <div className="person flr clearfix">
                        <div className="logout flr">退出</div>
                        <div className="flr">欢迎，<span className="name">江疏影</span></div>

                    </div>
                </div>

            </div>
        )

    }
}

export default MapHeader
