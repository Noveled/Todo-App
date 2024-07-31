import React, { useState } from 'react'
import Form from './Form'
import Todo from './Todo'
import Edit from './Edit'
import {v4 as uuidv4} from 'uuid';
uuidv4();

const TodoList = () => {
    const [todoValue, setTodoValue] = useState([]);

    const createTodo = (todo) => {
        setTodoValue(
            [...todoValue, { id: uuidv4(), task: todo, isEdit: false, isDone: false, }]
        );
    };

    const deleteTodo = (id) => {
        setTodoValue(
            todoValue.filter((todo) => todo.id !== id )
        );
    };

    const doneTodo = (id) => {
        setTodoValue(
            todoValue.map((todo) => 
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ));
    };
    
    // console.log(todoValue);

    return (
        <div className='px-4 py-2 text-4xl font-bold'>
            <div>Todo List</div> 
            <Form createTodo={createTodo}/>
            {
                todoValue.map((todo) => <Todo key={todo.id} todo={todo} doneTodo={doneTodo} deleteTodo={deleteTodo}/>)
            }
        </div>
    )
}

export default TodoList