
const initState = {
        search:'',
        status:'All',
        priority:[]
}

export const filtersReducer = (state = initState, action) =>
{
    switch (action.type) {
        case "filter/filterChangeInput":
            return {
                    ...state,
                    search: action.payload
                }
        case "filter/filterChangeCheckBox":
            return {
                    ...state,
                    status: action.payload
                }
        case "filter/filterChangePriority":
            return {
                    ...state,
                    priority: action.payload
                }        
        default: 
            return state;
    }


}