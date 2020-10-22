import React from 'react'

export const SearchBar = () => {
    return (
        <div className="row mt-4">
            <div className="col-2 form-group">
                <select id="groupSelect" className=" form-control w-100" name="groupSelect">
                    <option disabled selected>Group by : </option>
                    <option>None</option>
                    <option>Created On</option>
                    <option>Pending On</option>
                    <option>Priority</option>
                </select>
            </div>
            <div className="col">
                <input type="text" className="form-control w-100" placeholder="Search" />
            </div>
        </div>
    )
}
