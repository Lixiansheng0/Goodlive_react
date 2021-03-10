import React from "react"
import OrderListView from "../OrderListView"
import api from "../../../api"

export default class OrderList extends React.Component{


    constructor(){
        super();
        this.state = {
            orderData:[]
        }
    }

    componentDidMount(){
        api.getOrder({
            username:this.props.username
        })
        .then(res => res.json())
        .then(data =>{
            this.setState({
                orderData:data
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.orderData.length >0 ?
                    <OrderListView data={ this.state.orderData }/> :
                    <div>等待数据加载</div>
                }
            </div>
        )
    }
}