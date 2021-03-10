import React from "react"
import Item from "./Item"

export default class OrderListView extends React.Component{
    render(){
        const data = this.props.data;
        return(
            <div>
                {
                    data.map((element, index) => {
                        return <Item key={index} data={element}></Item>
                    })
                }
            </div>
        )
    }
}