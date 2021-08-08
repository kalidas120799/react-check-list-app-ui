import React, { Component } from 'react'
import Card from '../../components/card/Card'
export default class Recycle extends Component {
    render() {
        const data = [1, 2, 3, 4, 5]
        return (
            <div>
                <div className='container-fluid' >

                    <div className="row">
                        {
                            data.map((d) => (
                                <div className="col-12 col-sm-6 col-md-3 mb-4">
                                    <Card from="bin" width={null} />
                                </div>
                            ))
                        }
                    </div>
                </div>               
            </div>
        )
    }
}
