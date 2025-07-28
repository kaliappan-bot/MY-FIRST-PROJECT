import React, { createContext, useState } from "react";
import Container from "./Container";
export const themeContext = createContext();
const UseContext = () => {
    const [theme, setTheme] = useState("light");
    const toggleTheme = () => {
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    };
    return (
        <themeContext.Provider
        value={{
            theme: theme,
        }}
        ><button onClick={toggleTheme}>Toggle Theme</button>
        <h1>App Comp</h1>
        <Container />
        </themeContext.Provider>
    );
};
export default UseContext;