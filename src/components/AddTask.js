import React from 'react'

export const AddTask = () => {
    return (
        <div
            className="modal fade"
            id="AddTask"
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
                            Add Task
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
                                    aria-describedby="Summary"
                                    placeholder="Summary"
                                />
                            </div>
                            <div className="form-group col-12">
                                <label htmlFor="Description">Description</label>
                                <textarea
                                    className="form-control"
                                    id="Description"
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
                                    aria-describedby="DueDate"
                                    placeholder="DueDate"
                                />
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="Priority">DueDate</label>
                                <select id="Priority" className=" form-control w-100" name="Priority">
                                    <option disabled selected>Group by : </option>
                                    <option>High</option>
                                    <option>Medium</option>
                                    <option>Low</option>
                                    <option>None</option>
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
                        <button type="button" className="btn btn-success">
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
