import React, { Component } from 'react'
import Edit from '@material-ui/icons/Edit';
import Card from '../../components/card/Card';
import { AiOutlineInfoCircle } from 'react-icons/ai';
export default class Mytodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            checkList: ""
        }
    }
    updateCheckList = () => {
        const { title, checkList } = this.state
        const allcheckList = checkList.split("\n")
        const checkLists = {}
        for (var i = 0; i < allcheckList.length; i++) {
            if (allcheckList[i].trim().length !== 0) {
                checkLists[`checkLists${i + 1}`] = allcheckList[i]
                checkLists[`checkListsstatus${i + 1}`] = false
            }

        }
        checkLists["title"] = title
        console.log(checkLists);
    }
    handleChange = (e) => this.setState({ [e.target.name]: e.target.value })
    render() {
        const { title, checkList } = this.state
        const data = [1, 2]
        return (
            <div className='container-fluid' >
                <div className="row">
                    <div className="col-md-8" style={{ height: "80vh" }}>
                        <div className="card text-dark" style={{ height: "100%" }} >
                            <div className="card-body">
                                <h5 className="card-title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id magnam <span className="badge bg-danger">Pending</span>  <span className='float-end' style={{ marginRight: "40px", cursor: "pointer" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" ><Edit /></span></h5>
                                <p className="card-text mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur pariatur fugit consectetur temporibus nostrum! Enim eius magnam facilis, nam explicabo nulla. Beatae, odio porro? Porro provident asperiores et iusto, quod at incidunt. Vitae, sed. Porro, quam rem aut explicabo consequuntur dolore veritatis optio inventore esse possimus eligendi aspernatur, quasi voluptate natus necessitatibus cum. Dolores, impedit sint! Eligendi, sapiente. Architecto, vitae!</p>
                                <div>
                                    <div className="task">
                                        <input type="checkbox" className='mr-4' name="newtask" />
                                        <span className='m-3' >Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                                    </div>
                                    <div className="task">
                                        <input type="checkbox" defaultChecked className='mr-4' name="newtask" />
                                        <span className='m-3' ><strike>Lorem ipsum dolor sit amet, consectetur adipisicing.</strike> </span>
                                    </div>
                                    <div className="task">
                                        <input type="checkbox" className='mr-4' name="newtask" />
                                        <span className='m-3' >Lorem ipsum dolor sit amet, consectetur adipisicing.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h4 className='mb-4'>Next List</h4>
                        <div className="row">
                            {
                                data.map((d) => (
                                    <div className="col-md-12">
                                        <Card  customeStyle="mb-4" actions={false} width={null} height={null} />
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <h4 className='text-dark mb-4' >Update Your Check List</h4>
                        <div className='text-dark'>
                            <label className="form-label">Check List Title</label>
                            <input type="text" value={title} className='form-control' maxLength="20" onChange={(e) => this.handleChange(e)} name="title" />
                        </div>
                        <div className='text-dark mt-4'>
                            <label className="form-label">Check List <span data-bs-toggle="tooltip" style={{ cursor: "pointer" }} data-bs-placement="top" title="New Line Use To Create Your Todo List"><AiOutlineInfoCircle /></span> </label>
                            <textarea type="text" value={checkList} style={{ height: "100px" }} className='form-control' onChange={(e) => this.handleChange(e)} name="checkList" />
                        </div>
                        <div className='mt-4'>
                            <button className='btn text-white' onClick={this.updateCheckList} style={{ backgroundColor: "rgb(63, 61, 86)" }}>Update</button>
                        </div>
                    </div>
                </div>
            </div>            
        )
    }
}
