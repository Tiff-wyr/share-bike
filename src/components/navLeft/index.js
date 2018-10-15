import React, {Component} from 'react';
import './index.less'
import {Menu} from 'antd';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../action'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item

class NavLeft extends Component {
    menuClick = (row) => {
        let text = row.item.props.children.props.children
        console.log(row);
        this.props.setTitle(text)
    }
    render() {
        return (
            <div className="navLeft">
                <Menu onClick={this.menuClick}
                    mode="vertical" theme="dark">

                    <MenuItem key="/home">
                        <Link to="/admin/home">首页</Link>
                    </MenuItem>
                    <MenuItem key="/order">
                        <Link to="/admin/order">订单管理</Link>
                    </MenuItem>
                    <SubMenu title="图例">
                        <MenuItem key="/bar">
                            <Link to="/admin/bar">条形图</Link>
                        </MenuItem>
                        <MenuItem key="/pie">
                            <Link to="/admin/pie">饼状图</Link>
                        </MenuItem>
                    </SubMenu>


                </Menu>

            </div>
        );
    }
}

export default connect(
    null,
    (dispatch) => {
        return bindActionCreators(actions,dispatch)
    })
(NavLeft)