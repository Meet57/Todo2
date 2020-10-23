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
        case 'SEARCH_TASK':
            const reg = new RegExp(`${payload}`,`gi`)
            return {
                ...state,
                SearchTasks : state.Tasks.filter(task => task.Summary.match(reg))
            }
        case 'CLEAR_SEARCH':
            return {
                ...state,
                SearchTasks: null
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
                            if (x < y) { return -1; }
                            if (x > y) { return 1; }
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
                            var x = a.Priority.toLowerCase()
                            x = x === "high" ? 3 : x === "medium" ? 2 : 1
                            var y = b.Priority.toLowerCase();
                            y = y === "high" ? 3 : y === "medium" ? 2 : 1
                            console.log(x, y)
                            if (x < y) { return 1; }
                            if (x > y) { return -1; }
                            return 0;
                        }
                        )
                    }
                default:
                    return { ...state }
            }
        default:
            return state
    }
}