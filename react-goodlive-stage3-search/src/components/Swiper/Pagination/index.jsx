import React from "react"
import "./style.less"

export default class Pagination extends React.Component {
    render() {
        const { dots,currentIndex } = this.props;
        const arr = new Array(dots).fill(1);
        return (
            <div className="swiper-pagination">
                <ul>
                    {
                        arr.map((element,index) =>{
                            return <li className={ currentIndex===index ? 'selected' :'' } key={index}></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}