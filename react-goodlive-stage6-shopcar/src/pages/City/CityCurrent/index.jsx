import React from "react"
import "./style.less"

export default class CityCurrent extends React.Component{
    render(){
        return(
            <div className="current-city">
                <h2>当前城市：{ this.props.cityName }</h2>
            </div>
        )
    }
}