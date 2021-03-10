import React from "react"
import api from "../../../api"
import DetailInfoView from "../DetailInfoView"
import Swiper from "../../../components/Swiper"

export default class DetailInfo extends React.Component {

    state = {
        detailData: {}
    }

    componentDidMount() {
        api.getDetail({
            id: this.props.id
        })
            .then(res => res.json())
            .then(data => {
                this.setState({
                    detailData: data
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.detailData.imgs ?
                        <Swiper banners={this.state.detailData.imgs} /> :
                        <div>等待数据加载</div>
                }
                {
                    this.state.detailData.imgs ?
                        <DetailInfoView id={this.props.id} data={this.state.detailData} /> :
                        <div>等待数据加载</div>
                }
            </div>
        )
    }
}