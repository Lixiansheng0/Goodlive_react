import React from "react"
import api from "../../../api"
import CommentView from "../CommentView"
import LoadMore from "../../../components/LoadMore"

export default class Comment extends React.Component {

    constructor() {
        super();
        this.state = {
            commentData: [],
            hasMore: false,
            isLoading:false
        }
    }

    http() {
        this.setState({ isLoading:true })
        api.getComment({
            id: this.props.id
        }).then(res => res.json())
            .then(data => {
                this.setState({
                    commentData: this.state.commentData.concat(data.data),
                    hasMore: data.hasMore,
                    isLoading:false
                })
            })
    }

    componentDidMount() {
        this.http()
    }

    loadMoreHandle = () => {
        if(!this.state.isLoading){
            this.http();
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.commentData.length > 0 ?
                        <CommentView data={this.state.commentData} /> :
                        <div>等待数据加载</div>
                }
                {
                    this.state.hasMore ?
                        <LoadMore onLoadMore={this.loadMoreHandle} /> :
                        <div>没数据了!</div>
                }
            </div>
        )
    }
}