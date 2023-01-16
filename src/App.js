import './App.css';
import React, { useState, useEffect } from 'react';
import Form from '../src/components/Form'

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {document.title = `You clicked ${count} times`;});
  return (
    <>
    <button id="decrease" onClick={() => setCount(count - 1)}>
      -
    </button>
    <p>You clicked {count} times</p>
    <button id="increase" onClick={() => setCount(count + 1)}>
      +
    </button>
    <Form/>
    </>
  );
}



export default App;
