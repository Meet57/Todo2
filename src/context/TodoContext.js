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
              "Summary":"Iti Patel",
              "Description":"jhsadcbkjasdc",
              "DueDate":"2020-10-24",
              "Priority":"Medium",
              "CreatedDate":"2020-09-22"
           },
           {
              "id":1,
              "Summary":"Meet Patel",
              "Description":"patel",
              "DueDate":"0001-01-01",
              "Priority":"High",
              "isDone":false,
              "CreatedDate":"2020-10-22"
           },
           {
            "id":5,
            "Summary":"Tithi Patel",
            "Description":"patel",
            "DueDate":"0003-01-01",
            "Priority":"High",
            "isDone":false,
            "CreatedDate":"2020-10-22"
         },
         {
            "id":4,
            "Summary":"Poojan Mehta",
            "Description":"patel",
            "DueDate":"0002-01-01",
            "Priority":"Medium",
            "isDone":false,
            "CreatedDate":"2020-10-23"
         },
         {
            "id":6,
            "Summary":"Anuj Patel",
            "Description":"patel",
            "DueDate":"0003-01-01",
            "Priority":"Low",
            "isDone":false,
            "CreatedDate":"2020-10-23"
         },
           {
              "id":2,
              "Summary":"Mayur Patel",
              "Description":"shah",
              "DueDate":"2022-02-12",
              "Priority":"Low",
              "CreatedDate":"2020-12-23"
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