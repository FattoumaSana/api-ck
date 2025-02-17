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
    components: {
        // Styles pour IconButton
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    borderRadius: "12px",
                    transition: "0.3s",
                    border: "1px solid transparent",
                    "&:hover": {
                        border: "1px solid #1976d2", // Contour bleu au survol
                        boxShadow: "0px 0px 15px 2px #1976d2", // Effet lumineux bleu
                    },
                },
            },
        },
        // Styles pour TextField (barre de recherche)
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        transition: "0.3s",
                        border: "1px solid transparent",
                        "&:hover": {
                            border: "1px solid #1976d2", // Contour bleu au survol
                            boxShadow: "0px 0px 15px 2px #1976d2", // Effet lumineux bleu
                        },
                        "&.Mui-focused": {
                            border: "1px solid #1976d2", // Contour bleu lorsqu'il est focus
                            boxShadow: "0px 0px 15px 2px #1976d2", // Effet lumineux bleu
                        },
                    },
                },
            },
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
    components: {
        // Styles pour IconButton en mode sombre
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    borderRadius: "12px",
                    transition: "0.3s",
                    border: "1px solid transparent",
                    "&:hover": {
                        border: "1px solid #90caf9", // Contour bleu clair au survol
                        boxShadow: "0px 0px 15px 2px #90caf9", // Effet lumineux bleu clair
                    },
                },
            },
        },
        // Styles pour TextField (barre de recherche) en mode sombre
        MuiTextField: {
            styleOverrides: {
                root: {
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                        transition: "0.3s",
                        border: "1px solid transparent",
                        "&:hover": {
                            border: "1px solid #90caf9", // Contour bleu clair au survol
                            boxShadow: "0px 0px 15px 2px #90caf9", // Effet lumineux bleu clair
                        },
                        "&.Mui-focused": {
                            border: "1px solid #90caf9", // Contour bleu clair lorsqu'il est focus
                            boxShadow: "0px 0px 15px 2px #90caf9", // Effet lumineux bleu clair
                        },
                    },
                },
            },
        },
    },
});

export default theme;