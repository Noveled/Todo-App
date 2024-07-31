import React, { useState } from 'react'

const Form = ({ createTodo }) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(value);
        // var blank_pattern = /^\s+|\s+$/g;
        // value.replace(blank_pattern, '' ) == "" ? alert('할 일을 입력해주세요!') : createTodo(value);
        !value.trim() === true ? alert('할 일을 입력해주세요!') : createTodo(value);
        setValue('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}
            className='flex justify-between text-2xl my-4'>
                <input onChange={(e)=>setValue(e.target.value)}
                value={value}
                type="text" placeholder='할 일을 입력하세요'/>
                <button>등록</button>
            </form>
        </div>
    )
}

export default Form