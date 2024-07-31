import React from 'react'
import { MdEdit } from "react-icons/md";
import { FaTrashAlt } from "react-icons/fa";
import { GrCheckbox } from "react-icons/gr";
import { MdOutlineCheckBox } from "react-icons/md";


const Todo = ({todo, deleteTodo, editTodo, doneTodo}) => {
    const textClass = todo.isDone ? 
    'flex justify-between my-4 text-zinc-400 line-through' : 
    'flex justify-between my-4 ';
    
    return (
        <div className={textClass}>
            <div className='flex gap-2 items-center'>
                {todo.isDone 
                ? <MdOutlineCheckBox onClick={() => doneTodo(todo.id)} /> 
                : <GrCheckbox onClick={() => doneTodo(todo.id)} />}
                <p>{todo.task}</p>
            </div>
            <div className='flex gap-2 items-center'>
                <MdEdit />
                <FaTrashAlt onClick={() => deleteTodo(todo.id)} />
            </div>
        </div>
    )
}

export default Todo