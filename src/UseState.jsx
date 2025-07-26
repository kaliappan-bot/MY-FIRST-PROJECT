import React, { useState } from "react";
const UseState = () => {
let [num, setNum] = useState(100);
let x=1;
const handleAdd = () => {
    setNum((currvalue) => {
        return currvalue +5;});
    };
return (
    <>
    <h4>26/07/2025</h4>
    <h2>useState hook</h2>
    <h1>{num}</h1>
    <button onClick={handleAdd}>Add</button>
    </>
);
};
export default UseState;
