import React from 'react';
import { useState } from 'react';

function Form() {
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hi ${name}`);
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Enter your name:
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        </label>
        <input type= "submit" />
    </form>
    <h1>Welcome {name}</h1>
    </>
  )
}

export default Form