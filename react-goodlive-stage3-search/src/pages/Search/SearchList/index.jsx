import React from "react"
import api from "../../../api"
import SearchListView from "../SearchListView"
import LoadMore from "../../../components/LoadMore"

export default class SearchList extends React.Component{

    constructor(){
        super();
        this.state = {
            searchData:[],
            hasMore:false
        }
    }


    componentDidMount(){
        api.getSearch({
            keywords:this.props.keywords,
            city:this.props.cityName,
            page:1
        }).then(res =>res.json())
        .then(data => {
            this.setState({
                searchData:data.data,
                hasMore:data.hasMore
            })
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.searchData.length > 0 ?
                    <SearchListView data={ this.state.searchData }/> :
                    <div>等待数据加载...</div>
                }
                {
                    this.state.hasMore ?
                    <LoadMore /> :
                    <div>被你看光了!</div>
                }
                
            </div>
        )
    }
}