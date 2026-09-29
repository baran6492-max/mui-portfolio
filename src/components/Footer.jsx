import React from 'react';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <>
      <Box mt={2} mb={2} />
      <AppBar 
        component="footer" 
        position="static" 
        sx={{ backgroundColor: 'background.paper', color: 'text.primary', boxShadow: 'none' }}
      >
        <Toolbar 
          disableGutters 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            px: 2, // فاصله مناسب از لبه‌های چپ و راست
            width: '100%' 
          }}
        >
          {/* سمت چپ */}
          <Typography variant="button">
            My website
          </Typography>

          {/* سمت راست */}
          <Typography variant="body2">
            All rights reserved © 2026
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Footer;
