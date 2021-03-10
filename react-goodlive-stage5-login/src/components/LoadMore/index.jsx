import React from "react"


/**
 * 触底的事件
 *     监听滚动事件
 *         视口高度 + 滚动高度  > 元素距离顶部的高度  =>  元素出现了
 *         获得元素距离顶部的距离(随着滚动，距离会发生变化) < 视口高度 => 元素出现了
 */


export default class LoadMore extends React.Component {

    constructor() {
        super();
        this.divContainer = React.createRef();
    }

    srcollHandle() {
        var winHeight = document.documentElement.clientHeight;
        var timer = this;
        // 节流和防抖的操作
        // getBoundingClientRect:left  top  right bottom
        if (this.divContainer.current) {
            let currentElementHeight = this.divContainer.current.getBoundingClientRect().top;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                if (currentElementHeight < winHeight) {
                    this.props.onLoadMore();
                }
            }, 300)
        } else {
            clearTimeout(timer);
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.srcollHandle.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.srcollHandle);
    }

    render() {
        return (
            <div ref={this.divContainer}>
                LoadMore
            </div>
        )
    }
}