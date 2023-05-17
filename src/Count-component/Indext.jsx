import React, { useState } from 'react';

const Indext = () => {
    const [count, setcount] = useState(0)
    const add = () => {
        setcount(count + 1)
    }
    const remove = () => {
        setcount(count - 1)
    }
    const zero = () => {
        setcount(0)
    }
    return (
        <div className='area container mt-5'>
            <h1 className=''>
                <button className='p-2'>Count : {count}</button>
            </h1>
            <button className='btn btn-success' onClick={add}>+</button> <span> </span>
            <span>  </span>
            <button className='btn btn-danger' onClick={remove}>-</button> <span> </span>
            <button className='btn btn-warning' onClick={zero}>0</button>
        </div>
    );
};

export default Indext;