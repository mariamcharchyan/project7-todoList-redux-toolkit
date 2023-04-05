import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    list:[],
    finishetList:[]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodoList: (state, action) => {
            state.list.push({
                id: Math.random(),
                isFinished: false,
                isEditing: false,
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
                    todo.isFinished = !todo.isFinished;
                }
            })
            state.finishetList = state.list.filter((todo) => todo.isFinished)
        },
        deleteIisFinished: (state, action) => {
            state.finishetList = action.payload
            state.list = state.list.filter((todo) => !todo.isFinished)
        },
        editTodoText: (state, action) => {
            state.list.map(todo => {
                if (todo.id === action.payload){
                    todo.isEditing = !todo.isEditing; 
                }
            })
        },
        updateTodoText: (state, action) => {
            const { id, text } = action.payload;
            state.list.map(todo => {
                if (todo.id === id){
                    todo.text = text;
                    todo.isEditing = !todo.isEditing;
                }
            })
        },
    },
});

export const { 
    addTodoList, 
    deleteOneTodo, 
    deleteTodoList, 
    isFinished, 
    deleteIisFinished,
    updateTodoText,
    editTodoText
} = todoSlice.actions;

export const selectTodo = (state) => state.todo;

export default todoSlice.reducer;