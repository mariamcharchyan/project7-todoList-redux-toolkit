import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTodoList,
    deleteTodoList,
    deleteIisFinished,
    selectTodo,
    } from './reducerTodoList';
import './TodoList.css';
import TodoItem from "./TodoItem";


export default function TodoList() {

    const data = useSelector(selectTodo);
    const dispatch = useDispatch();

    const [text, setText] = useState("");

    console.log(data);
    return (
        <div className='todoContainer'>
            <div className='todoTitle'>
                <h1>TODO LIST</h1>
            </div>
            <div className='todoForm'>
                <input type="text" value={text} 
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                <button  onClick={() => {
                    dispatch(addTodoList(text));
                    setText("");
                }}
                > Add </button>
            </div>
            <div className='todoList'>
                {data.list.map((todo) => {
                    return (
                        <TodoItem key={todo.id} todo={todo}/>
                    );  
                })}
            </div>
            <div className={data.list.length < 1 ? 'noTodoDelete' : 'todoDelete'}>
                <p>{data.finishetList.length}/{data.list.length} Finished</p>
                <button onClick={() => dispatch(deleteIisFinished([]))}>Delete  finishid</button>
                <button onClick={() => dispatch(deleteTodoList([]))}>Delete  all</button>
            </div>
        </div>
      );
    }
