import React from "react"
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import Pagination from "./Pagination"
import "./style.less"

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default class Swiper extends React.Component {

    constructor(){
        super();
        this.state = {
            index:0
        }
    }

    handleChangeIndex(index){
        this.setState({
            index:index
        })
    }

    render() {
        const banners = this.props.banners;
        const { index }  = this.state;
        return (
            <div className="swiper">
                <AutoPlaySwipeableViews interval={5000} onChangeIndex={this.handleChangeIndex.bind(this)}>
                    {
                        banners.map((element,index) =>{
                            return (
                                <div key={ index } className="swiper-view">
                                    <img src={ element } alt=""/>
                                </div>
                            )
                        })
                    }
                </AutoPlaySwipeableViews>
                <Pagination dots={3} currentIndex={ index }/>
            </div>
        )
    }
}