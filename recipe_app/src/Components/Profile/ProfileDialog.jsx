import React, { useState, useEffect } from 'react'
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from '@mui/material';
import axios from 'axios';


export default function ProfileDialog({ open, onClose }) {

    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        password: '',
        profileImage: '',
    });

    

    useEffect(() => {
        if (open) {
            const fetchUserDetails = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('token')); // Get the user data from localStorage
                if (user && user.id) {
                const response = await axios.get(`http://localhost:8888/users/${user.id}`);
                setUserDetails(response.data);
                } else {
                console.error('User ID not found in token.');
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
            };

            fetchUserDetails();
        }
    }, [open]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
        ...userDetails,
        [name]: value,
    });
    };


    


    const handleSave = async () => {
    try {
        const user = JSON.parse(localStorage.getItem('token'));
        await axios.put(`http://localhost:8888/users/${user.id}`, userDetails);
        onClose();
    } catch (error) {
        console.error('Error updating user details:', error);
    }
    };

    return (
        <Dialog open={open} onClose={onClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
            <TextField
                margin="dense" name="name" label="Name" type="text"
            fullWidth value={userDetails.name}
            onChange={handleInputChange}
            />
            <TextField
                margin="dense" name="email" label="Email" type="email"
            fullWidth value={userDetails.email}
            onChange={handleInputChange}
            />
            <TextField fullWidth label="Password" type="password" margin="dense"
            variant="outlined" value={userDetails.password} onChange={handleInputChange}
            
        />
            {/* Add more fields as needed */}
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">Cancel</Button>
            <Button onClick={handleSave} color="primary">Save</Button>
        </DialogActions>
    </Dialog>
    )
}
