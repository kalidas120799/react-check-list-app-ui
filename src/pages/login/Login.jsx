import React, { Component } from 'react'
import "./login.css"
import { AiOutlineGoogle } from "react-icons/ai"
import { checkLogin } from "../../auth"
import { Redirect } from 'react-router-dom'
export default class Login extends Component {
    login = () => {
        var newToken = Date.now().toString()
        localStorage.setItem("token", newToken)
        return window.location.replace("/home")
    }
    render() {
        if (checkLogin()) {
            return <Redirect to="/home" />
        }
        return (
            <div className='container-fluid d-flex justify-content-center align-items-center'>
                <div className="card" style={{ width: "34rem", height: "30rem" }}>
                    <div className="card-body">
                        <div className='welcome-div'></div>
                        <div>
                            <button className='btn w-100 text-white' onClick={this.login} style={{ backgroundColor: "rgb(63, 61, 86)" }} ><span className='mr-2' ><AiOutlineGoogle /></span> Signup/Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
