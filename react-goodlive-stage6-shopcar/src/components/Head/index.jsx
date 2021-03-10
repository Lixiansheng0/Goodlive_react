import React from "react"
import { Link } from "react-router-dom"
import SearchInput from "../SearchInput"
import "./style.less"

export default class Head extends React.Component {
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{ this.props.cityName }</span>
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    <Link to="/cart">
                        <i className="iconfont icon-car"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput />
                    </div>
                </div>
            </div>
        )
    }
}