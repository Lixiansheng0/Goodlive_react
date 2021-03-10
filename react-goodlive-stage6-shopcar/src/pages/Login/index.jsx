import React from "react"
import LoginView from "./LoginView"
import { connect } from "react-redux"
import { login } from "../../actions/login"

class Login extends React.Component{

    getLogin = (data) => {
        this.props.login({
            username:data
        })
        window.history.back();
    }

    render(){
        return(
            <div>
                <LoginView onLogin={ this.getLogin }/>
            </div>
        )
    }
}



export default connect(null,{ login })(Login);