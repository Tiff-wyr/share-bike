import React,{Component} from 'react'
import './index.less'
import utils from '../../utils/index'
import axios from 'axios'

class Header extends Component{
    constructor(props){
        super(props)
    }
    state={
        weather:'',
        time:'',
    }
    componentWillMount() {
        this.getWeather()
        this.getDate()
    }
    getWeather(){
        axios.get(`http://t.weather.sojson.com/api/weather/city/101010100`).then(res => {
            let weatherData = res.data.data.forecast[0]
            let weatherStr = `${weatherData.low} ~ ${weatherData.high} ${weatherData.fx} ${weatherData.fl}`
            this.setState({weather: weatherStr})
    })
    }
    getDate(){
        setInterval(()=>{
            let unixDate = new Date().getTime()
            let time = utils.formDate(unixDate)
            this.setState({
                time
            })

        },1000)
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
