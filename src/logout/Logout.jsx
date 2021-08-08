import React from 'react'
import "./logout.css"
export default function Logout() {
    const logout = () => {
        localStorage.clear()
        return window.location.replace("/")
    }
    return (
        <div className='container-fluid'>
            <div className='logout-gif'></div>
            <div className='text-center'><h4>I Hate You!😢😢</h4></div>
            <div className='text-center'><button className='btn btn-danger' onClick={logout}>Logout</button></div>
        </div>
    )
}
