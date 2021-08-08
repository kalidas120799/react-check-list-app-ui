import React, { Component } from 'react'
import Todo from '../todo/Create'
import Card from '../../components/card/Card'
export default class Home extends Component {
    render() {
        const data = [1, 2, 3, 4, 5, 6, 7]
        return (
            <div className='home'>
                <div className='container-fluid' >

                    <div className="row">
                        {
                            data.map((d,i) => (
                                <div className="col-12 col-sm-6 col-md-3 mb-4" key={i}>
                                    <Card from="home" width={null} />
                                </div>
                            ))
                        }
                    </div>
                </div>


                <Todo />
            </div>
        )
    }
}
