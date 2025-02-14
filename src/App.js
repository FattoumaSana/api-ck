import React, { useState } from "react";
import UserList from "./UserList";
import { ThemeProvider, createTheme, CssBaseline, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { darkTheme, theme } from "./theme"; // Importez les thèmes

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : theme}>
            <CssBaseline />
            <div className="App">
                <IconButton
                    onClick={() => setDarkMode(!darkMode)}
                    color="inherit"
                    style={{ position: "absolute", top: 16, right: 16 }}
                >
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
                <UserList />
            </div>
        </ThemeProvider>
    );
};

export default App;