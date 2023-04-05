import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    deleteOneTodo,
    isFinished,
    updateTodoText,
    editTodoText
    } from './reducerTodoList';
import './TodoItem.css'


export default function TodoItem({todo}) {

    const dispatch = useDispatch();
    console.log(todo);
    
    const [newText, setNewText] = useState(todo.text);
                
    return (
        <div className="todoItem" >
            <div className="leftTodoItem">
                <input
                    type="checkbox"
                    checked={todo.isFinished}
                    onChange={() => dispatch(isFinished(todo.id))}
                />
                {todo.isEditing ? (
                    <input
                        type="text"
                        value={newText}
                        onChange={(e) => setNewText(e.target.value)}
                    />
                ) : (
                    <p>{todo.text}</p>
                )}
            </div>
            <div className="rightTodoItem">
                {todo.isEditing  ? (
                    <div className="editButtons">
                        <button onClick={() => dispatch(updateTodoText({ id: todo.id, text: newText }))}>Save</button>
                        <button onClick={() => dispatch(editTodoText(todo.id))}>Cancel</button>
                    </div>
                ) : (
                    <div className="editButtons">
                        <button onClick={() => dispatch(editTodoText(todo.id))}>Edit</button>
                    </div>
                )}
                <button className="deleteButton" onClick={() => dispatch(deleteOneTodo(todo.id))}>X</button>
            </div>
        </div>
    );
}