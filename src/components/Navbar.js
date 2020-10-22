import React from 'react'
import { AddTask } from './AddTask'

export const Navbar = () => {
    return (
        <div className="d-flex justify-content-between mt-5">
            <h2>ToDo App</h2>
            <button type="button" className="btn btn-primary btn-lg" data-toggle="modal"
                data-target="#AddTask" style={{
                    borderRadius: "50%"
                }}>
                +
            </button>
            <AddTask />
        </div>
    )
}
