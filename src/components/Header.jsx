// src/components/Header.jsx
import React from 'react';
import {
  Paper,
  AppBar,
  Toolbar,
  createTheme,
  ThemeProvider,
  Box,
  Button,
} from '@mui/material';
import { orange, green } from '@mui/material/colors';
import { Home as HomeIcon, Send as SendIcon } from '@mui/icons-material';

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    },
  },
});

export const navTabs = [
  { title: 'Resume', link: 'resume' },
  { title: 'Skills & Services', link: 'skills' },
  { title: 'Portfolio', link: 'portfolio' },
  { title: 'Contact', link: 'contact' },
];

const Header = ({ activeTab, setActiveTab }) => {
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={2} sx={{ mb: 2 }}>
        <AppBar position="static" sx={{ backgroundColor: 'background.paper', color: 'text.primary' }}>
          <Toolbar
            disableGutters
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: { xs: 1, md: 2 },
            }}
          >
            {/* دکمه Home */}
            <Box
              component="div"
              onClick={() => setActiveTab('resume')}
              sx={{
                backgroundColor: 'primary.main',
                cursor: 'pointer',
                color: 'common.white',
                display: { xs: 'none', md: 'flex' },
                alignItems: 'center',
                justifyContent: 'center',
                p: 1.5,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            >
              <HomeIcon />
            </Box>

            {/* نوار تب‌ها با دکمه‌های مستقیم و بدون گیر و باگ */}
            <Box sx={{ display: 'flex', gap: 1, flexGrow: 1, mx: 2, overflowX: 'auto' }}>
              {navTabs.map((item) => {
                const isActive = activeTab === item.link;
                return (
                  <Button
                    key={item.link}
                    onClick={() => {
                      console.log('Tab clicked:', item.link);
                      setActiveTab(item.link);
                    }}
                    sx={{
                      fontWeight: isActive ? 'bold' : 'normal',
                      color: isActive ? 'primary.main' : 'text.secondary',
                      borderBottom: isActive ? '3px solid' : '3px solid transparent',
                      borderColor: isActive ? 'primary.main' : 'transparent',
                      borderRadius: 0,
                      py: 1.5,
                      px: 2,
                      textTransform: 'none',
                      whiteSpace: 'nowrap',
                      '&:hover': {
                        backgroundColor: 'action.hover',
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>

            {/* دکمه Hire me */}
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={() => setActiveTab('contact')}
              sx={{ borderRadius: 2, textTransform: 'none', color: '#fff' }}
            >
              Hire me
            </Button>
          </Toolbar>
        </AppBar>
      </Paper>
    </ThemeProvider>
  );
};

export default Header;
