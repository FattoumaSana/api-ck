import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar"; // Importez SearchBar
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LanguageIcon from "@mui/icons-material/Language";
import BusinessIcon from "@mui/icons-material/Business";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PersonIcon from "@mui/icons-material/Person";
import axios from "axios";
import { Card, CardContent, Typography, Container, Grid, Fade } from "@mui/material";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from "@mui/material";

const UserList = () => {
    const [listOfUser, setListOfUser] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUser, setSelectedUser] = useState(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setListOfUser(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données :", error);
            }
        };

        fetchData();
    }, []);

    const filteredUsers = listOfUser.filter(
        (user) =>
            user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.address.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClickOpen = (user) => {
        setSelectedUser(user);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Liste des utilisateurs
            </Typography>
            <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
            <Grid container spacing={3}>
                {filteredUsers.map((user) => (
                    <Grid item key={user.id} xs={12} sm={6} md={4}>
                        <Fade in={true} timeout={1000}>
                            <Card
                             sx={{
                                color: "white",
                                borderRadius: "12px",
                                transition: "0.3s",
                                border: "1px  #1976d2 solid transparent",
                                "&:hover": {
                                    border: "1px solid #1976d2", // Contour bleu au survol
                                    boxShadow: "0px 0px 15px 2px #1976d2", // Effet lumineux bleu
                                },
                            }}
                            onClick={() => handleClickOpen(user)} style={{ cursor: "pointer" }}>
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