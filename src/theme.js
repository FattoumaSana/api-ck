import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        mode: 'light', // Par défaut en mode clair
        primary: {
            main: "#1976d2", // Bleu primaire
        },
        secondary: {
            main: "#dc004e", // Rose secondaire
        },
        background: {
            default: "#fafafa", // Fond clair légèrement grisé
            paper: "#ffffff", // Fond des composants en papier
        },
        text: {
            primary: "#000000", // Texte principal noir
            secondary: "#757575", // Texte secondaire gris
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h3: {
            fontWeight: 700,
            color: "#1976d2", // Couleur du titre H3 en bleu primaire
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#90caf9", // Bleu clair primaire pour le mode sombre
        },
        secondary: {
            main: "#f48fb1", // Rose clair secondaire pour le mode sombre
        },
        background: {
            default: "#0f1214", // Fond sombre
            paper: "#0f1214", // Fond des composants en papier en mode sombre
        },
        text: {
            primary: "#ffffff", // Texte principal blanc
            secondary: "#b3b3b3", // Texte secondaire gris clair
        },
    },
    typography: {
        fontFamily: "Roboto, sans-serif",
        h3: {
            fontWeight: 700,
            color: "#90caf9", // Couleur du titre H3 en bleu clair primaire
        },
    },
});

export default theme;