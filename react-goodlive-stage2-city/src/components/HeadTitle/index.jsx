import React from "react"
import "./style.less"

export default class HeadTitle extends React.Component {

    clickBackHandle = ()=>{
        window.history.back();
        // this.props.history.push("/")
    }

    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={ this.clickBackHandle }>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{ this.props.title }</h1>
            </div>
        )
    }
}