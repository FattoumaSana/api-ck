import React, { useState } from "react";
import UserList from "./UserList";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { darkTheme, theme } from "./theme"; 
import './App.css'; 
const App = () => {
    const [darkMode, setDarkMode] = useState(true);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
            <CssBaseline />
            <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
                <IconButton
                    onClick={() => setDarkMode(!darkMode)}
                    color="inherit"
                    style={{ position: "absolute", top: 16, right: 16 }}
                >
                    {darkMode ? <Brightness7 style={{ color: '#ffffff' }} /> : <Brightness4 style={{ color: '#ffffff' }} />}
                </IconButton>
                <UserList />
            </div>
        </ThemeProvider>
    );
};

export default App;