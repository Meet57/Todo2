import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

export const SearchBar = () => {

    const { dispatch } = useContext(TodoContext)
    const [Search, setSearch] = useState("")

    useEffect(() => {
        dispatch({
            type: 'GROUP_BY',
            payload: "id"
        })
        // eslint-disable-next-line
    }, [])
    
    useEffect(() => {
        if(Search !== ""){
            dispatch({
                type: 'SEARCH_TASK',
                payload: Search
            })
        }else{
            dispatch({
                type: 'CLEAR_SEARCH'
            })
        }
        // eslint-disable-next-line
    }, [Search])

    const handleChange = (e) => {
        dispatch({
            type: 'GROUP_BY',
            payload: e.target.value
        })
    }

    return (
        <div className="row mt-4">
            <div className="col-2 form-group">
            <label htmlFor="groupSelect">Group By</label>
                <select id="groupSelect" defaultValue="id" onChange={handleChange} className=" form-control w-100" name="groupSelect">
                    <option value="id" >None</option>
                    <option value="CreatedDate" >Created On</option>
                    <option value="DueDate" >Pending On</option>
                    <option value="Priority" >Priority</option>
                </select>
            </div>
            <div className="col">
            <label htmlFor="SearchBar">Search</label>
                <input type="text" id="SearchBar" value={Search} onChange={(e)=>{setSearch(e.target.value)}} className="form-control w-100" placeholder="Search" />
            </div>
        </div>
    )
}
