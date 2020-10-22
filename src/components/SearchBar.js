import React from 'react'

export const SearchBar = () => {
    return (
        <div className="row mt-4">
            <div className="col-2 form-group">
            <label htmlFor="groupSelect">DueDate</label>
                <select id="groupSelect" defaultValue="None" className=" form-control w-100" name="groupSelect">
                    <option value="None" >None</option>
                    <option value="Created On" >Created On</option>
                    <option value="Pending On" >Pending On</option>
                    <option value="Priority" >Priority</option>
                </select>
            </div>
            <div className="col">
            <label htmlFor="SearchBar">Search</label>
                <input type="text" id="SearchBar" className="form-control w-100" placeholder="Search" />
            </div>
        </div>
    )
}
