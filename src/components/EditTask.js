import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'


export const EditTask = ({task,tableid}) => {

    const { dispatch } = useContext(TodoContext)

    const [Task, setTask] = useState(task)

    const { id,Summary, Description, DueDate, Priority } = Task

    const handleChange = (e) => {
        setTask({
            ...Task,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmit = () => {
        dispatch({
            type: "EDIT_TASK",
            payload: Task
        })
    }

    return (
        <div
            className="modal fade"
            id={"EditTask"+id+tableid}
            data-backdrop="static"
            data-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Edit Task
                        </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">

                        {/* Modal body */}

                        <div className="row">
                            <div className="form-group col-12">
                                <label htmlFor="Summary">Summary</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="Summary"
                                    name="Summary"
                                    value={Summary}
                                    onChange={handleChange}
                                    aria-describedby="Summary"
                                    placeholder="Summary"
                                />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="Description">Description</label>
                                <textarea
                                    className="form-control"
                                    id="Description"
                                    value={Description}
                                    onChange={handleChange}
                                    aria-describedby="Description"
                                    placeholder="Description"
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="DueDate">DueDate</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="DueDate"
                                    value={DueDate}
                                    onChange={handleChange}
                                    aria-describedby="DueDate"
                                    placeholder="DueDate"
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="Priority">Priority</label>
                                <select id="Priority" value={Priority} onChange={handleChange} className="form-control w-100" name="Priority">
                                    <option defaultChecked >Priority</option>
                                    <option value="High" >High</option>
                                    <option value="Medium" >Medium</option>
                                    <option value="Low" >Low</option>
                                    <option value="None" >None</option>
                                </select>
                            </div>
                        </div>


                        {/* modal body end */}

                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={handleSubmit}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
