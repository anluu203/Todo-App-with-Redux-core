

export const addTodo = (data) =>{

    return{
        type: 'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoId) =>{

    return{
        type: 'todoList/toggleTodoStatus',
        payload: todoId
    }
}
export const filterChangeInput = (text) =>{

    return{
        type: 'filter/filterChangeInput',
        payload: text
    }
}


export const filterChangeCheckBox = (status) =>{

    return{
        type: 'filter/filterChangeCheckBox',
        payload: status
    }
}

export const filterPriorityChange = (priorities) =>{

    return{
        type: 'filter/filterChangePriority',
        payload: priorities
    }
}