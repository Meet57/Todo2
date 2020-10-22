export const TodoReducer = (state, { type, payload }) => {
    switch (type) {
        case 'ADD_TASK':
            return {
                ...state,
                Tasks: [...state.Tasks, payload]
            }
        case 'EDIT_TASK':
            return {
                ...state,
                Tasks: state.Tasks.map(task => task.id === payload.id ? payload : task)
            }
        case 'DELETE_TASK':
            return {
                ...state,
                Tasks: state.Tasks.filter(task => task.id !== payload)
            }
        case 'CHANGE_STATUS':
            return {
                ...state,
                Tasks: state.Tasks.map(task => task.id === payload.id ? payload : task)
            }
        case 'GROUP_BY':
            switch (payload) {
                case 'id':
                    return {
                        ...state,
                        Tasks: state.Tasks.sort((a, b) => a.id - b.id)
                    }
                case 'CreatedDate':
                    return {
                        ...state,
                        Tasks: state.Tasks.sort(function (a, b) {
                            var x = a.CreatedDate.toLowerCase();
                            var y = b.CreatedDate.toLowerCase();
                            if (x < y) { return 1; }
                            if (x > y) { return -1; }
                            return 0;
                        }
                        )
                    }
                case 'DueDate':
                    return {
                        ...state,
                        Tasks: state.Tasks.sort(function (a, b) {
                            var x = a.DueDate.toLowerCase();
                            var y = b.DueDate.toLowerCase();
                            if (x < y) { return -1; }
                            if (x > y) { return 1; }
                            return 0;
                        }
                        )
                    }
                case 'Priority':
                    return {
                        ...state,
                        Tasks: state.Tasks.sort(function (a, b) {
                            var x = a.Priority.toLowerCase();
                            var y = b.Priority.toLowerCase();
                            if (x < y) { return -1; }
                            if (x > y) { return 1; }
                            return 0;
                        }
                        )
                    }
                default:
                    return { ...state }
            }
        // return {
        //     ...state,
        //     Tasks : state.Tasks.sort((a,b) => a.id - b.id)
        // }
        default:
            return state
    }
}