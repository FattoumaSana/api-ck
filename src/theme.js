import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2", // Couleur principale
        },
        secondary: {
            main: "#dc004e", // Couleur secondaire
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