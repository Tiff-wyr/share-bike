import React, { Component } from 'react';
import './index.less'
import { Menu,Icon} from 'antd';
import {Link} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const MenuItem=Menu.Item

class NavLeft extends Component {
    render() {
        return (
            <div className="navLeft">
               <Menu mode="vertical" theme="dark">

                           <MenuItem key="/home">
                               <Link to="/home">首页</Link>
                           </MenuItem>
                           <MenuItem key="/order">
                               <Link to="/order">订单管理</Link>
                           </MenuItem>

               </Menu>

            </div>
        );
    }
}

export default NavLeft;