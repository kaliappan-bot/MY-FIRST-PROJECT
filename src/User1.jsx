import React, { useContext } from "react";
import { themeContext } from "./UseContext";
const User1 = () => {
    const { theme } = useContext(themeContext);
    const textStyle = {
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
    };
    return (
        <>
        <h1 style={textStyle}>User</h1>
        </>
    );
};
export default User1;