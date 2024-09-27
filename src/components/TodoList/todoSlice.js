


const initState =[
        {id:'1', name:'Learn React', completed: false, priority:'Medium' },
        {id:'2', name:'Learn React-redux', completed: true, priority:'Low' }
    ]


export const todoReducer = (state = initState, action) =>
{
    switch (action.type) {
        case "todoList/addTodo":
           return[...state, action.payload];
           case "todoList/toggleTodoStatus":
            return state.map(todo => todo.id === action.payload ?
                {...todo, completed: !todo.completed} : todo
            )   
        default: 
            return state;
    }


}