import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { ListItem } from './ListItem'

export const AllTable = () => {

    const {Tasks} = useContext(TodoContext)

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
            <tbody>
                {
                    Tasks.map(task => {
                        return <ListItem task={task} key={task.id} />
                    })
                }
            </tbody>
        </table>
    )
}
