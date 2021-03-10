import React from 'react';
import "./style.less"

export default class LoginView extends React.Component {

    constructor(){
        super();
        this.state = {
            username:""
        }
    }

    changeHandler(e){
        this.setState({
            username:e.target.value
        })
    }

    clickHandler(){
        this.props.onLogin(this.state.username)
    }

    render() {
        return (
            <div id="login-container">
                <div className="input-container phone-container">
                    <i className="icon-tablet"></i>
                    <input 
                        value={ this.state.username }
                        placeholder="用户名/手机号"
                        onChange={ this.changeHandler.bind(this) }
                    />
                </div>
                <div className="input-container password-container">
                    <i className="icon-key"></i>
                    <button>发送验证码</button>
                    <input type="text" placeholder="输入验证码" />
                </div>
                <button className="btn-login" onClick={ this.clickHandler.bind(this) }>登录</button>
            </div>
        )
    }
}