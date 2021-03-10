import React from "react"
import "./style.less"
import Item from "./Item"

export default class CommentView extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div className="comment-list">
                {
                    data.map((element,index) =>{
                        return <Item key={index} data={ element }></Item>
                    })
                }
            </div>
        )
    }
}