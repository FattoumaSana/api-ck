import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar"; // Importez SearchBar
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonIcon from "@mui/icons-material/Person";
import { Fade } from "@mui/material";
import axios from "axios";
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const UserList = () => {
    // État pour stocker la liste des utilisateurs
    const [listOfUser, setListOfUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); // État pour la recherche
    const [selectedUser, setSelectedUser] = useState(null); // État pour l'utilisateur sélectionné
    const [open, setOpen] = useState(false); // État pour gérer l'ouverture du dialogue

    // Utilisation de useEffect pour récupérer les données de l'API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                );
                setListOfUser(response.data); // Mettre à jour l'état avec les données reçues
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };

        fetchData(); // Appeler la fonction
    }, []); // Le tableau vide signifie que cela ne s'exécute qu'une fois après le montage

    // Filtrer les utilisateurs en fonction du terme de recherche
    const filteredUsers = listOfUser.filter(
        (user) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Gérer le changement de la valeur de recherche
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Ouvrir le dialogue et définir l'utilisateur sélectionné
    const handleClickOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    // Fermer le dialogue
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Liste des utilisateurs
            </Typography>
            {/* Ajoutez la barre de recherche */}
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Grid container spacing={3}>
                {filteredUsers.map((user) => (
                    <Grid item key={user.id} xs={12} sm={6} md={4}>
                        <Fade in={true} timeout={1000}>
                            <Card onClick={() => handleClickOpen(user)} style={{ cursor: "pointer" }}>
                                <CardContent>
                                    <Typography variant="body1" color="text.secondary">
                                        <PersonIcon fontSize="small" /> {user.username}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <EmailIcon fontSize="small" /> {user.email}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <LocationCityIcon fontSize="small" /> {user.address.city}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <PhoneIcon fontSize="small" /> {user.phone}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <LanguageIcon fontSize="small" /> {user.website}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <BusinessIcon fontSize="small" /> {user.company.name}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Fade>
                    </Grid>
                ))}
            </Grid>

            {/* Dialogue pour afficher plus de détails */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{selectedUser?.name}</DialogTitle>
                <DialogContent>
                    <Typography>
                        <strong>Nom d'utilisateur :</strong> {selectedUser?.username}
                    </Typography>
                    <Typography>
                        <strong>Email :</strong> {selectedUser?.email}
                    </Typography>
                    <Typography>
                        <strong>Adresse :</strong> {selectedUser?.address.street}, {selectedUser?.address.suite}, {selectedUser?.address.city}, {selectedUser?.address.zipcode}
                    </Typography>
                    <Typography>
                        <strong>Coordonnées GPS :</strong> Lat: {selectedUser?.address.geo.lat}, Lng: {selectedUser?.address.geo.lng}
                    </Typography>
                    <Typography>
                        <strong>Téléphone :</strong> {selectedUser?.phone}
                    </Typography>
                    <Typography>
                        <strong>Site web :</strong> {selectedUser?.website}
                    </Typography>
                    <Typography>
                        <strong>Entreprise :</strong> {selectedUser?.company.name}
                    </Typography>
                    <Typography>
                        <strong>Slogan de l'entreprise :</strong> {selectedUser?.company.catchPhrase}
                    </Typography>
                    <Typography>
                        <strong>Domaine d'activité :</strong> {selectedUser?.company.bs}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Fermer
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default UserList;