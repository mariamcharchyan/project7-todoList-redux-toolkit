// store-ի համար
import { createSlice } from '@reduxjs/toolkit';

//սահմանում է todo-ի սկզբնական վիճակը
const initialState = {
    list:[],
    finishetList:[]
};
// store-ի համար
//Կոդի այս բլոկը ստեղծում է նոր todoSlice՝ կանչելով createSlice ֆունկցիան:
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    //reducers հատկությունը օբյեկտ է, որը սահմանում է հատվածի reducer-ները
    reducers: {
        addTodoList: (state, action) => {
            state.list.push({
                id: Math.random(),
                isFinished: false,
                text: action.payload
            });
        },
        deleteOneTodo: (state, action) => {
            state.list = state.list.filter((todo) => todo.id !== action.payload)
        },
        deleteTodoList: (state, action) => {
            state.list = action.payload
            state.finishetList = action.payload
        },
        isFinished: (state, action) => {
            state.list.map(todo => {
                if (todo.id === action.payload){
                    todo.isFinished = true;
                }
            })
            state.finishetList = state.list.filter((todo) => todo.isFinished)
        },
        deleteIisFinished: (state, action) => {
            state.finishetList = action.payload
            state.list = state.list.filter((todo) => !todo.isFinished)
        }
    },
});

export const { 
    addTodoList, 
    deleteOneTodo, 
    deleteTodoList, 
    isFinished, 
    deleteIisFinished
} = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;