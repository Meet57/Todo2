import React, { createContext, useEffect, useReducer } from 'react'
import { TodoReducer } from './TodoReducer'

export const TodoContext = createContext()



export const TodoContextProvider = (props) => {

    // const initialState = {
    //     Tasks : []
    // }

    const initialState = {
        "Tasks":[
           {
              "id":3,
              "isDone":false,
              "Summary":"C",
              "Description":"jhsadcbkjasdc",
              "DueDate":"2020-10-24",
              "Priority":"Medium",
              "CreatedDate":"2020-09-22"
           },
           {
              "id":1,
              "Summary":"A",
              "Description":"patel",
              "DueDate":"0001-01-01",
              "Priority":"High",
              "isDone":false,
              "CreatedDate":"2020-10-22"
           },
           {
              "id":2,
              "Summary":"B",
              "Description":"shah",
              "DueDate":"2022-02-12",
              "Priority":"Low",
              "CreatedDate":"2020-12-22"
           }
        ],
        "SearchTasks":null
     }

    const [state, dispatch] = useReducer(TodoReducer,initialState)

    const { Tasks,SearchTasks } = state

    useEffect(() => {
        console.log('Tasks', JSON.stringify(state))
    }, [state])

    return(
        <TodoContext.Provider
            value={{
                Tasks,
                SearchTasks,
                dispatch
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}