import React, { createContext, useEffect, useReducer } from 'react'
import { TodoReducer } from './TodoReducer'

export const TodoContext = createContext()



export const TodoContextProvider = (props) => {

    // const initialState = {
    //     Tasks : []
    // }

    const initialState = {"Tasks":[{"id":1603364068675,"isDone": true,"Summary":"task","Description":"jhsadcbkjasdc","DueDate":"2020-10-24","Priority":"Medium","CreatedDate":"2020-10-22"}]}

    const [state, dispatch] = useReducer(TodoReducer,initialState)

    const { Tasks } = state

    useEffect(() => {
        console.log('Tasks', JSON.stringify(state))
    }, [state])

    return(
        <TodoContext.Provider
            value={{
                Tasks,
                dispatch
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}