import React from 'react';
import './PrivacyPolicy.css'
import { Container, Typography, Box } from '@mui/material';


export default function PrivacyPolicy() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        This Privacy Policy describes how we handle your personal information.
        We may collect, use, and share your data in accordance with this policy.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We collect information you provide directly to us,
        such as when you register, or contact us.
        This may include your name, email address.
      </Typography>
      <Typography variant="h6" gutterBottom>
        How We Use Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        We use the information we collect to provide and improve our services,
        and communicate with you.
        We may also use your data for marketing purposes with your consent.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Data Security
      </Typography>
      <Typography variant="body1" paragraph>
        We implement reasonable measures to protect your data from unauthorized access,
        use, or disclosure. However, no method of transmission over the Internet is completely secure.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Changes to This Policy
      </Typography>
      <Typography variant="body1" paragraph>
        We may update this Privacy Policy from time to time.
        We will notify you of any significant changes by posting the new policy on our website.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        If you have any questions about this Privacy Policy, please contact us at recipeapp@recipe.com.
      </Typography>
    </Container>
  )
}
