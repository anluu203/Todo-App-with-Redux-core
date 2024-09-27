// slice reducer: tức là chúng ta sẽ chia rootReducer tổng thành những reducer con ứng với
// mỗi component riêng biệt. Chẳng hạn như Filters component, chúng ta sẽ tạo 1 file mới
// tên là FiltersSlice và trong đó chứa reducer của nó


import { todoReducer } from "../components/TodoList/todoSlice"
import { filtersReducer } from "../components/Filters/FiltersSlice"

export const rootReducer = (state = {}, action) =>
{
    return{
        filter: filtersReducer(state.filter, action),
        todoList: todoReducer(state.todoList, action)
    }
}