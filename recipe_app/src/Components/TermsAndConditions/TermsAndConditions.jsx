import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, FormControlLabel, Checkbox } from '@mui/material';

export default function TermsAndConditions({  open, onClose, onAccept }) {

    const [checked, setChecked] = useState(false);

    const handleAccept = () => {

    if (checked) {
        
        localStorage.setItem('termsAccepted', 'true');
        onAccept();
    } else {
        alert("You must accept the terms and conditions before proceeding.");
    }
    };

    if (!open) return null;


    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
        <DialogTitle>
            <Typography variant="h6">Terms and Conditions</Typography>
            </DialogTitle>
            <DialogContent dividers>
            <Typography variant="body1">
            
            <p>1. Introduction</p>

            <p>
            Welcome to RecipeApp! By using our website and services,
            you agree to the following terms and conditions. </p>

            <p>2. User Responsibilities </p>

            <p> You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. 
                You agree to accept responsibility for all activities that occur under your account or password.
            </p>

            <p>3. Prohibited Activities</p>

            <p>You agree not to engage in any activities that may harm or disrupt the services or violate any laws or regulations.
                This includes, but is not limited to, distributing malicious software, harassing other users,
                or attempting to gain unauthorized access to our systems.</p>

            <p>4. Intellectual Property</p>

                <p>All content on RecipeApp, including but not limited to text, 
                    graphics, logos, and images, is the property of RecipeApp or its 
                    content providers and is protected by copyright and other intellectual property laws.</p>
            
            
            <p>5. Limitation of Liability</p>

            <p>RecipeApp is not liable for any direct, 
                indirect, incidental, special, or consequential damages
                 resulting from the use or inability to use our services. 
                 This includes, but is not limited to, damages for loss of profits,
                  data, or other intangible losses.</p>

            <p>6. Changes to Terms</p>

            <p>We reserve the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. 
                Your continued use of the App after any changes constitutes your acceptance of the new Terms.</p>
            
            
            </Typography>
            <FormControlLabel
            control={
                <Checkbox
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                color="primary"
                />
            }
            label="I accept the terms and conditions"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={onClose} color="primary">
                Close
            </Button>
            <Button onClick={handleAccept} color="primary">
            Accept
            </Button>
            </DialogActions>
        </Dialog>

    )
}
