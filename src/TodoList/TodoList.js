import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    addTodoList,
    removeTodoList,
    deleteTodoList,
    isFinished,
    deleteIisFinished,
    selectTodo,
} from './reducerTodoList';
import './TodoList.css'


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
                {data.list.map((todo) =>{
                    return (
                        <div className='todoItem'key={todo.id}>
                            <div className='leftTodoItem'>
                                <input type='checkbox' checked={todo.isFinished} onChange={() => dispatch(isFinished(todo.id))}/>
                                <p>{todo.text}</p>
                            </div>
                            <button onClick={() => dispatch(removeTodoList(todo.id))}>X</button>
                        </div>
                    )
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
