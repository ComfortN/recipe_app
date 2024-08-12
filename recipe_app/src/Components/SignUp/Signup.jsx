import React, {useState} from 'react'
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Alerts from '../Alerts/Alerts'

export default function Signup() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('success');
    const [alertVisible, setAlertVisible] = useState(false);

    const validate = () => {
        let tempErrors = {};
        tempErrors.name = name ? "" : "Name is required";
        tempErrors.email = email ? "" : "Email is required";
        tempErrors.password = password ? "" : "Password is required";
        tempErrors.confirmPassword = confirmPassword ? "" : "Confirm Password is required";
        tempErrors.passwordMatch = password === confirmPassword ? "" : "Passwords do not match";
        setErrors(tempErrors);
        return Object.values(tempErrors).every(x => x === "");
    };
    
    const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {

        setAlertMessage('Passwords do not match');
        setAlertType('error');
        setAlertVisible(true);
        return;
        }

    if (validate()) {
        try {

        const existingUserResponse = await axios.get('http://localhost:8888/users', {
            params: { email }
        });

        if (existingUserResponse.data.length > 0) {

            setAlertMessage('User already exists');
            setAlertType('error');
            setAlertVisible(true);

            return;
        }
    
            const response = await axios.post('http://localhost:8888/users', { name, email, password, recipes: [] });
            localStorage.setItem('token', JSON.stringify({ id: response.data.id }));
            setAlertMessage('Successfully Signed Up');
            setAlertType('success');
            setAlertVisible(true);
            setTimeout(() => navigate('/login'), 2000);

            }

            catch (err) {
                setAlertMessage('Signup error: ' + err.message);
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
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Email" margin="normal" variant="outlined"
            value={email} onChange={(e) => setEmail(e.target.value)}
            error={Boolean(errors.email)} helperText={errors.email}
        />
        <TextField
            name='name' type='text' label='Name' variant='outlined' fullWidth
            margin="normal" onChange={(e) => setName(e.target.value)}
            error={Boolean(errors.name)} helperText={errors.name}
            />
        <TextField fullWidth label="Password" type="password" margin="normal"
            variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)}
            error={Boolean(errors.password)} helperText={errors.password}
        />
        <TextField fullWidth label="Confirm Password" type="password"
            margin="normal" variant="outlined" value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={Boolean(errors.confirmPassword)} helperText={errors.passwordMatch || errors.confirmPassword}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
        </Button>
        <Grid container justifyContent="flex-end">
            <Button color="primary" onClick={() => navigate('/login')}>
            Already have an account? Login
            </Button>
        </Grid>
      </form>
    </Container>
  )
}
