import React from "react"


/**
 * 触底的事件
 *     监听滚动事件
 *         视口高度 + 滚动高度  > 元素距离顶部的高度  =>  元素出现了
 *         获得元素距离顶部的距离(随着滚动，距离会发生变化) < 视口高度 => 元素出现了
 */


export default class LoadMore extends React.Component{

    constructor(){
        super();
        this.divContainer = React.createRef();
    }

    componentDidMount(){
        var winHeight = document.documentElement.clientHeight;
        window.addEventListener("scroll",()=>{
            // getBoundingClientRect:left  top  right bottom
            let currentElementHeight = this.divContainer.current.getBoundingClientRect().top;
            if(currentElementHeight < winHeight){
                console.log("加载数据");
            }            
        })
    }

    render(){
        return(
            <div ref={ this.divContainer }>
                LoadMore
            </div>
        )
    }
}