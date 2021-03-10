import React from "react"
import SearchInput from "../../../components/SearchInput"
import "./style.less"

export default class SearchHead extends React.Component {

    clickHandle = () =>{
        window.history.back();
    }

    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={ this.clickHandle }>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    <SearchInput keywords={ this.props.keywords }/>
                </div>
            </div>
        )
    }
}