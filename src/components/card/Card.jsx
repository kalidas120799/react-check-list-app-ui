import React from 'react'
import "./card.css"
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
export default function Card({ from, customeStyle = null, width = "18rem", height = "267px", actions = true }) {
    const deleteList = () => {
        alert(from)
    }
    return (
        <div className={`card ${customeStyle}`} style={{ width, height }} >
            <div className="card-body text-dark">

                <h5 className="card-title">Lorem ipsum dolor sit amet consectetur, adipisicing <span className="badge bg-success">Completed</span></h5>
                <p className="card-text short-div">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat qui, omnis ut, quos nemo nesciunt, est ipsa dolorem voluptatum ex quisquam ducimus impedit animi numquam earum exercitationem quia quibusdam. Alias modi similique accusamus totam numquam enim eligendi iure, delectus nisi officiis sint ex minus. Ea facere eos accusamus, tempora pariatur reprehenderit. Vitae sapiente eius, magnam nemo doloremque iure molestiae aspernatur?</p>
                {
                    actions ? (
                        <div className="row">
                            <div className="col-6 col-sm-6 col-md-6"><Link to="/mytodo/333" className="btn text-white" style={{ backgroundColor: "rgb(63, 61, 86)" }}>View</Link></div>
                            <div className="col-6 col-sm-6 col-md-6 text-end" style={{ cursor: "pointer" }} onClick={(e) => deleteList(e)} ><DeleteIcon /></div>
                        </div>
                    ) : null
                }

            </div>
        </div>
    )
}


