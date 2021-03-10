import React from "react"
import "./style.less"
import api from "../../../../api"

export default class Item extends React.Component {

    constructor() {
        super();
        this.state = {
            commentState: 0
        }
        this.feelBackText = React.createRef();
    }

    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        })
    }

    clickHandle = () => {
        this.setState({
            commentState: 1
        })
    }

    onSubmitHandler = () => {
        if (this.feelBackText.current.value) {
            api.postComment({
                content: this.feelBackText.current.value
            }).then(res => res.json())
                .then(data => {
                    if (data.msg) {
                        this.setState({
                            commentState: 2
                        })
                    }
                })
        }else{
            alert("请填写评价信息")
        }
    }

    onCancelHandler = () => {
        this.setState({
            commentState: 0
        })
    }

    render() {
        const data = this.props.data;
        const { commentState } = this.state;
        return (
            <div className="clear-fix order-item-container">
                <div className="order-item-img float-left">
                    <img src={data.img} />
                </div>
                <div className="order-item-comment float-right">
                    {
                        commentState === 0 ?
                            <button className="btn" onClick={this.clickHandle}>评价</button>
                            : commentState === 1 ? '' :
                                <button className="unseleted-btn btn">已评价</button>
                    }
                </div>
                <div className="order-item-content">
                    <span>商户：{data.title}</span>
                    <span>类型：{data.houseType}</span>
                    <span>价格：￥{data.price}</span>
                </div>
                {
                    commentState === 1 ?
                        <div className="comment-text-container">
                            <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref={this.feelBackText}></textarea>
                            <button className="btn" onClick={this.onSubmitHandler}>提交</button>
                            <button className="btn unseleted-btn" onClick={this.onCancelHandler}>取消</button>
                        </div>
                        : ""
                }

            </div>
        )
    }
}