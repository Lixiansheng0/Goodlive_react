import React from "react"
import HomeHotView from "../HomeHotView"
import api from "../../../api"

export default class HomeHot extends React.Component {

    constructor() {
        super();
        this.state = {
            homehot1: [],
            homehot2: []
        }
    }

    componentDidMount() {
        api.getHomehot1({
            city: this.props.cityName
        }).then(res => res.json()).then(data => {
            this.setState({
                homehot1: data
            })
        })

        api.getHomehot2({
            city: this.props.cityName
        }).then(res => res.json()).then(data => {
            this.setState({
                homehot2: data
            })
        })
    }

    componentWillUnmount(){
        this.setState = (state,callback) =>{
            return;
        }
    }

    render() {
        const { homehot1, homehot2 } = this.state;
        return (
            <div>
                {
                    homehot1.length > 0 ?
                        <HomeHotView title={"热销单品"} data={homehot1} /> :
                        <div>等待数据加载...</div>
                }
                {
                    homehot2.length > 0 ?
                        <HomeHotView title={"家庭常用"} data={homehot2} /> :
                        <div>等待数据加载...</div>
                }
            </div>
        )
    }
}