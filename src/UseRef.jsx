import React, { useEffect, useRef, useState } from "react";
const UseRef = () => {
    const [input, SetInput] = useState("");
    const inputRef = useRef();
useEffect(() => {
    inputRef.current = input;
}, [input]);
const display = () => {
    console.log("InputRef current value is:", inputRef.current);
};
return (
    <>
    <h1>UseRef</h1>
    <input
    type="text"
    value={input}
    onChange={(e) => SetInput(e.target.value)}
    />
    <p>My name is {input}</p>
    <p>My name is {inputRef.current}</p>
    <button onClick = {display}>Show Input</button>
    </>
);
};
export default UseRef;