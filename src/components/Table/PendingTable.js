import React from 'react'

export const PendingTable = () => {
    return (
        <table className="table">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Summary</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Created On</th>
                    <th scope="col">Due By</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    )
}
