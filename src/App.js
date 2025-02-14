import React, { useState } from "react";
import UserList from "./UserList";
import { ThemeProvider, createTheme, CssBaseline, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material"; // Icônes pour le mode sombre/clair

// Créez un thème personnalisé
const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", 
        },
        secondary: {
            main: "#dc004e", 
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h3: {
            fontWeight: 700,
        },
    },
});

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    // Créez un thème dynamique en fonction du mode sombre/clair
    const appliedTheme = createTheme({
        ...theme,
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: "#1976d2", // Couleur principale
            },
            secondary: {
                main: "#dc004e", // Couleur secondaire
            },
        },
    });

    return (
        <ThemeProvider theme={appliedTheme}>
            <CssBaseline /> {/* Applique le thème à l'ensemble de l'application */}
            <div className="App">
                {/* Bouton pour basculer entre le mode sombre et clair */}
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