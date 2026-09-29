import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import PageHeader from '../components/PageHeader';

const AboutMe = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 2 }}>
      <Box sx={{ m: 2, px: 2, py: 4 }}>
        {/* کامپوننت عنوان */}
        <PageHeader title="About Me" />

        {/* متن درباره من */}
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ lineHeight: 1.8, fontSize: '1rem' }}
        >
          I’m <strong>Razieh</strong>, a freelance developer who loves turning
          ideas into sleek, responsive web apps with React, Material-UI, and
          Node.js. Open for freelance projects and team collaborations—let’s
          build something awesome together!
        </Typography>
      </Box>
    </Paper>
  );
};

export default AboutMe;
