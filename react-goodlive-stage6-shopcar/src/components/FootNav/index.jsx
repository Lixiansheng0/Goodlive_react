import React from "react"
import { NavLink } from "react-router-dom"
import "./style.less"

export default class FootNav extends React.Component {
    render() {
        return (
            <div className="nav-footer">
                <ul className="clear-fix">
                    <li>
                        <NavLink exact to="/">
                            <i className="iconfont icon-home"></i>
                            首页
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/shop">
                            <i className="iconfont icon-shop"></i>
                            商城
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/life">
                            <i className="iconfont icon-trophy"></i>
                            生活服务
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/mine">
                            <i className="iconfont icon-team"></i>
                            我的
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}