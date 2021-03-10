import React from "react"
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"

import Home from "../pages/Home"
import Life from "../pages/Life"
import Mine from "../pages/Mine"
import Shop from "../pages/Shop"
import City from "../pages/City"
import NotFound from "../pages/NotFound"

import { initCity } from "../actions/city"
import { connect } from "react-redux"
import store from "../utils/store"

class AppRouter extends React.Component{

    componentDidMount(){
        if(store.getItem("city")){
            this.props.initCity({
                cityName:store.getItem("city")
            })
        }

        // store.setItem('names','iwen','userinfo');
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={ Home }></Route>
                    <Route path="/life" component={ Life }></Route>
                    <Route path="/mine" component={ Mine }></Route>
                    <Route path="/shop" component={ Shop }></Route>
                    <Route path="/city" component={ City }></Route>
                    <Route component={ NotFound }></Route>
                </Switch>
            </Router>
        )
    }
}

export default connect(null,{ initCity })(AppRouter)