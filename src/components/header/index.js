import React,{Component} from 'react'
import './index.less'

class Header extends Component{
    constructor(props){
        super(props)
    }
    state={
        weather:'',
        time:'',
    }
    render(){
        return (
            <div className="main">
                <div className="header">
                    <div className="logout flr">
                        退出
                    </div>
                    <div className="user flr">
                        欢迎,  <span className="username">张怡宁</span>
                    </div>
                </div>
                <div className="header-detail clearfix">
                    <div className="breadcrumb-title fll">
                        首页
                    </div>
                    <div className="weather flr clearfix">
                        <div className="date fll">
                            {this.state.time}
                        </div>
                        <div className="weather-detail fll">
                            {this.state.weather}
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}
export default Header
