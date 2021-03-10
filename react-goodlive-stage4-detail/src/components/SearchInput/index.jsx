import React from "react"
import "./style.less"
import { withRouter } from "react-router-dom"

class SearchInput extends React.Component {

    constructor(){
        super();
        this.state = {
            searchValue:""
        }
    }

    inputChangeHandler = (e) =>{
        this.setState({
            searchValue:e.target.value
        })
    }

    keyUpHandle = (e) =>{
        if(e.keyCode === 13){
            this.props.history.push("/search/"+this.state.searchValue)
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.keywords !== this.props.keywords){
            this.setState({
                searchValue:this.props.keywords
            })
        }
    }

    render() {
        return (
            <input
                type="text"
                value={this.state.searchValue}
                className="search-input"
                placeholder="请输入搜索内容"
                onKeyUp={ this.keyUpHandle }
                onChange={this.inputChangeHandler}
            />
        )
    }
}

export default withRouter(SearchInput)