import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { EditTask } from '../EditTask'

export const ListItem = ({ task,tableid }) => {

    const { id,Summary,isDone, DueDate, Priority, CreatedDate } = task

    const { dispatch } = useContext(TodoContext)

    const deleteTask = () => {
        dispatch({
            type: 'DELETE_TASK',
            payload: id
        })
    }

    const changeStatus = () => {
        dispatch({
            type:'CHANGE_STATUS',
            payload:{...task,isDone:!isDone}
        })
    }

    return (
        <>
            <tr style={isDone ? {textDecorationLine:'line-through'} : {}}>
                <td> {Summary} </td>
                <td> {Priority} </td>
                <td> {CreatedDate} </td>
                <td> {DueDate} </td>
                <td>
                    <button className="btn btn-primary btn-sm p-1 m-1" data-toggle="modal"
                        data-target={"#EditTask" + id + tableid} >
                        <span className="material-icons">
                            edit
                        </span>
                    </button>
                    <button className="btn btn-success" onClick={changeStatus}>
                        {isDone ? 'ReOpen' : 'Done'}
                    </button>
                    <button className="btn btn-danger p-1 m-1" onClick={deleteTask}>
                        <span className="material-icons">
                            delete
                        </span>
                    </button>
                </td>
            </tr>
            <EditTask task={task} tableid={tableid} />
        </>
    )
}
