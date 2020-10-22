export const TodoReducer = (state,{type,payload}) => {
    switch(type){
        case 'ADD_TASK':
            return {
                ...state,
                Tasks : [...state.Tasks,payload]
            }
        case 'EDIT_TASK':
            return {
                ...state,
                Tasks : state.Tasks.map(task => task.id === payload.id ? payload : task)
            }
        case 'DELETE_TASK':
            return {
                ...state,
                Tasks : state.Tasks.filter(task => task.id !== payload)
            }
        case 'CHANGE_STATUS':
            return {
                ...state,
                Tasks : state.Tasks.map(task => task.id === payload.id ? payload : task)
            }
        default:
            return state
    }
}