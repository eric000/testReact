import React from "react"
import ajax from '@util/ajax.js'

class Login extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }
    onInputChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    submit(e) {
        const login = new ajax('/user/login.do', this.state)
        login.init().then(res => {
            console.log(res)
        }, (res) => {
            console.log(res)
        })
    }
    render() {
        return (
            <div className="box loginBox">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" name="username" type="text" placeholder="请输入用户名/邮箱" onChange={(e) => this.onInputChange(e)}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" name="password" type="password" placeholder="请输入密码" onChange={(e) => this.onInputChange(e)}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button onClick={(e) => this.submit(e)} className="button is-success">
                            Login
                            </button>
                        </p>
                    </div>
            </div>
        )
    }
}
export default Login