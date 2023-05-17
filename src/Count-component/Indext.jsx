import React, { useState } from 'react';

const Indext = () => {
    const [count, setcount] = useState(0)
    const add = () => {
        setcount(count + 1)
       if(count >=4){
         document.getElementById("add").setAttribute('disabled' , 'disabled')
       }
    }
    const remove = () => {
        setcount(count - 1)
        if(count <=-4){
            document.getElementById("remove").setAttribute('disabled' , 'disabled')
          }
    }
    const zero = () => {
        setcount(0)
        document.getElementById("remove").removeAttribute('disabled',   'disabled')
        document.getElementById("add").removeAttribute('disabled',   'disabled') 

    }
    return (
        <div className='area container mt-5'>
            <h1 className=''>
                <button className='p-2'>Count : {count}</button>
            </h1>
            <button className='btn btn-success' id='add' onClick={add}>+</button> <span> </span>
            <span>  </span>
            <button className='btn btn-danger' id='remove' onClick={remove}>-</button> <span> </span>
            <button className='btn btn-warning' onClick={zero}>0</button>
        </div>
    );
};

export default Indext;