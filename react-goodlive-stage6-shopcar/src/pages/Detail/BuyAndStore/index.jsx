import React from "react"
import BuyAndStoreView from "../BuyAndStoreView"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { collect, unCollect } from "../../../actions/collect"

class BuyAndStore extends React.Component {

    constructor() {
        super();
        this.state = {
            isCollect:false
        }
    }

    componentDidMount(){
        this.setState({
            isCollect:this.isStore()
        })
    }

    storeHandle = () => {
        const username = this.props.login.username;
        if (username) {
            if (this.isStore()) {
                // 取消收藏
                this.props.unCollect({
                    id: this.props.id
                })
                this.setState({
                    isCollect:false
                })
            } else {
                this.props.collect({
                    id: this.props.id
                })
                this.setState({
                    isCollect:true
                })
            }

        } else {
            this.props.history.push("/login")
        }
    }

    render() {
        return (
            <div>
                <BuyAndStoreView isCollect={ this.state.isCollect } onStore={this.storeHandle} />
            </div>
        )
    }

    // 判断是否收藏
    isStore() {
        const currentId = this.props.id;
        const collects = this.props.collects
        return collects.some((element) => {
            return element.id == currentId;
        })
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        collects: state.collect
    }
}

export default withRouter(connect(mapStateToProps, { collect, unCollect })(BuyAndStore))