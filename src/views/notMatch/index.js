import React,{Component} from 'react'
import './index.less'
import notFoundImg from './img.gif'
import {Link} from 'react-router-dom'

class NotMatch extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="notMatch">
                <div className="text">
                    <div className="notFound">404,找不到页面</div>
                    <div className="noF">确实没有</div>
                    <ul>
                        <li>你可以</li>
                        <li><Link to="/admin/home">点这里</Link></li>
                    </ul>
                </div>
                <div className="pic">
                    <img src={notFoundImg} alt=""/>
                </div>

            </div>
        )

    }

}
export default NotMatch