import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'light', // Par défaut en mode clair
        primary: {
            main: "#1976d2",
        },
        secondary: {
            main: "#dc004e",
        },
        background: {
            default: "#ffffff",
            paper: "#f5f5f5",
        },
        text: {
            primary: "#000000",
            secondary: "#757575",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h3: {
            fontWeight: 700,
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#90caf9",
        },
        secondary: {
            main: "#f48fb1",
        },
        background: {
            default: "#121212",
            paper: "#1e1e1e",
        },
        text: {
            primary: "#ffffff",
            secondary: "#b3b3b3",
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h3: {
            fontWeight: 700,
        },
    },
});

export default theme;