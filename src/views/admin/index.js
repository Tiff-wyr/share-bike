import React,{Component} from 'react'
import './index.less'
import { Row, Col } from 'antd';
import NavLeft from '../../components/navLeft/index'
import Header from  '../../components/header/index'
import Footer from  '../../components/footer/index'

class Admin extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="admin">
                <Row>
                    <Col span={4}>
                       <NavLeft></NavLeft>
                    </Col>
                    <Col span={20}>
                        <Header></Header>
                        <div className="content-wrap">
                            <div className="content">
                                {this.props.children}
                            </div>
                        </div>
                        <Footer></Footer>
                    </Col>

                </Row>
            </div>
        )

    }
}

export default Admin
