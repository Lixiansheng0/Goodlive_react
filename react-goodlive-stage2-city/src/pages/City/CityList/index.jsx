import React from "react"
import "./style.less"
import store from "../../../utils/store"

export default class CityList extends React.Component {

    cityClickHandler = (data) => {
        this.props.changeCity({
            cityName:data
        })
        // 用户存在选择，将城市存储到本地
        store.setItem('city',data);
        window.history.back();
    }

    render() {
        return (
            <div className="city-list-container">
                <h3>热门城市</h3>
                <ul className="clear-fix">
                    <li onClick={(e) => { this.cityClickHandler('北京', e) }}><span>北京</span></li>
                    <li onClick={(e) => this.cityClickHandler('上海', e)}><span>上海</span></li>
                    <li onClick={(e) => this.cityClickHandler('杭州', e)}><span>杭州</span></li>
                    <li onClick={(e) => this.cityClickHandler('广州', e)}><span>广州</span></li>
                    <li onClick={(e) => this.cityClickHandler('苏州', e)}><span>苏州</span></li>
                    <li onClick={(e) => this.cityClickHandler('深圳', e)}><span>深圳</span></li>
                    <li onClick={(e) => this.cityClickHandler('哈尔滨', e)}><span>哈尔滨</span></li>
                    <li onClick={(e) => this.cityClickHandler('沈阳', e)}><span>沈阳</span></li>
                    <li onClick={(e) => this.cityClickHandler('长春', e)}><span>长春</span></li>
                    <li onClick={(e) => this.cityClickHandler('呼和浩特', e)}><span>呼和浩特</span></li>
                    <li onClick={(e) => this.cityClickHandler('贵阳', e)}><span>贵阳</span></li>
                    <li onClick={(e) => this.cityClickHandler('桂林', e)}><span>桂林</span></li>
                    <li onClick={(e) => this.cityClickHandler('西安', e)}><span>西安</span></li>
                    <li onClick={(e) => this.cityClickHandler('石家庄', e)}><span>石家庄</span></li>
                    <li onClick={(e) => this.cityClickHandler('太原', e)}><span>太原</span></li>
                    <li onClick={(e) => this.cityClickHandler('成都', e)}><span>成都</span></li>
                    <li onClick={(e) => this.cityClickHandler('长沙', e)}><span>长沙</span></li>
                    <li onClick={(e) => this.cityClickHandler('昆明', e)}><span>昆明</span></li>
                </ul>
            </div>
        )
    }
}