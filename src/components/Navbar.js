import React from 'react'

export const Navbar = () => {
    return (
        <div className="d-flex justify-content-between mt-5">
            <h4>ToDo App</h4>
            <button type="button" className="btn btn-primary btn-lg" style={{
                borderRadius:"50%"
            }}>
                +
            </button>
        </div>
    )
}
