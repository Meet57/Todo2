import React, { createContext, useReducer } from 'react'
import { TodoReducer } from './TodoReducer'

export const TodoContext = createContext()



export const TodoContextProvider = (props) => {

    const initialState = {
        Tasks : {}
    }

    const [state, dispatch] = useReducer(TodoReducer,initialState)

    const { Tasks } = state

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