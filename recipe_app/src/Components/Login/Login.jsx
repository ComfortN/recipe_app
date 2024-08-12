import React, {useState} from 'react'
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alerts from '../Alerts/Alerts';

export default function Login({onLogin}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success');
    const [alertVisible, setAlertVisible] = useState(false);

    const validate = () => {
        let tempErrors = {};
        tempErrors.email = email ? "" : "Email is required";
        tempErrors.password = password ? "" : "Password is required";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        
        if (validate()) {
            try {
                const response = await axios.get('http://localhost:8888/users', {
                    params: { email, password }
                });
        
                if (response.data.length > 0) {
                    const user = response.data[0];
                    if (user.password === password){
                        localStorage.setItem('token', JSON.stringify({ id: user.id }));
                        onLogin();
                        setAlertMessage('Successfully logged-in');
                        setAlertType('success');
                        setAlertVisible(true);
                        navigate('/');
                    } else {
                        setAlertMessage('Invalid credentials');
                        setAlertType('error');
                        setAlertVisible(true);
                    }
                } else {
                setAlertMessage('Invalid credentials');
                setAlertType('error');
                setAlertVisible(true);
            }
        
            } catch (err) {
                setAlertMessage('Login error: ' + err.message);
                setAlertType('error');
                setAlertVisible(true);
            }
        }
    };


    return (
        <Container maxWidth="xs">
            <Alerts
            message={alertMessage}
            severity={alertType}
            visible={alertVisible}
            onClose={() => setAlertVisible(false)}
        />
        <Typography variant="h4" gutterBottom>
            Login
        </Typography>

        <form onSubmit={handleSubmit}>
            <TextField fullWidth label="Email" margin="normal" variant="outlined"
            value={email} onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)} helperText={errors.email}
            />

            <TextField fullWidth label="Password" type="password" margin="normal"
                variant="outlined" value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(errors.password)} helperText={errors.password}
            />

            <Button type="submit" fullWidth variant="contained" color="primary">
            Login
            </Button>

            <Grid container justifyContent="flex-end">
                <Button color="primary" onClick={() => navigate('/signup')}>
                    Don't have an account? Sign up
                </Button>
            </Grid>
        </form>
    </Container>
    );
}
