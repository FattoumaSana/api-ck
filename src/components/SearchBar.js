import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <TextField
            label="Rechercher un utilisateur"
            variant="outlined"
            fullWidth
            margin="normal"
            value={searchTerm}
            onChange={onSearchChange}
        />
    );
};

export default SearchBar;