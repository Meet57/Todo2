import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { ListItem } from './ListItem'

export const CompletedTable = () => {

    const {Tasks,SearchTasks} = useContext(TodoContext)

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
                    SearchTasks !== null ?
                    SearchTasks.map(task => {
                        if(task.isDone){
                            return <ListItem task={task} key={task.id} tableid={2} />
                        }else{
                            return null
                        }
                    })
                    :
                    Tasks.map(task => {
                        if(task.isDone){
                            return <ListItem task={task} key={task.id} tableid={2} />
                        }else{
                            return null
                        }
                    })
                }
            </tbody>
        </table>
    )
}
