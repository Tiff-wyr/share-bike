import React, {Component} from 'react';
import './index.less'
import {Menu} from 'antd';
import {Link} from 'react-router-dom'

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem = Menu.Item

class NavLeft extends Component {
    render() {
        return (
            <div className="navLeft">
                <Menu mode="vertical" theme="dark">

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

export default NavLeft;