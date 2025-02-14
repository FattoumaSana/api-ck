import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <TextField
            fullWidth
            label="Rechercher un utilisateur"
            variant="outlined"
            value={searchTerm}
            onChange={onSearchChange}
            margin="normal"
        />
    );
};

export default SearchBar;