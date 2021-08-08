import React, { Component } from 'react'
import Add from '@material-ui/icons/Add';
import { AiOutlineInfoCircle } from "react-icons/ai"
import "./todo.css"
export default class Create extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            checkList: "",
            description:""
        }
    }
    createCheckList = () => {
        const { title, checkList,description } = this.state
        const allcheckList = checkList.split("\n")
        const newList={}
        const checkLists = {}
        for (var i = 0; i < allcheckList.length; i++) {
            if (allcheckList[i].trim().length !== 0) {
                checkLists[`checkLists${i + 1}`] = allcheckList[i]
                checkLists[`checkListsstatus${i + 1}`] = false
            }

        }
        newList["checklists"]=checkLists
        newList["title"] = title
        newList["description"] = description
        console.log(newList);
    }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

    render() {
        const { title, checkList,description } = this.state
        return (
            <React.Fragment>
                <button className="addicon" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><Add /></button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <h4 className='text-dark mb-4' >Create Your Check List</h4>
                        <div className='text-dark'>
                            <label className="form-label">Check List Title</label>
                            <input type="text" value={title} className='form-control' maxLength="20" onChange={(e) => this.handleChange(e)} name="title" />
                        </div>
                        <div className='text-dark mt-4'>
                            <label className="form-label">Description </label>
                            <textarea type="text" value={description} style={{ height: "100px" }} className='form-control' onChange={(e) => this.handleChange(e)} name="description" />
                        </div>
                        <div className='text-dark mt-4'>
                            <label className="form-label">Check List <span data-bs-toggle="tooltip" style={{ cursor: "pointer" }} data-bs-placement="top" title="New Line Use To Create Your Todo List"><AiOutlineInfoCircle /></span> </label>
                            <textarea type="text" value={checkList} style={{ height: "100px" }} className='form-control' onChange={(e) => this.handleChange(e)} name="checkList" />
                        </div>
                        <div className='mt-4'>
                            <button className='btn text-white' onClick={this.createCheckList} style={{ backgroundColor: "rgb(63, 61, 86)" }}>Create</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
