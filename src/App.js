// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import { Container, Grid, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './components/Profile';

import Resume from './pages/Resume';
import SkillsServices from './pages/SkillsServices';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

import profileImage from './assets/images/image.webp';

const App = () => {
  // تب فعال (مقدار پیش‌فرض: resume)
  const [activeTab, setActiveTab] = useState('resume');

  // تابع رندر کردن صفحه متناظر با تب فعال
  const renderContent = () => {
    switch (activeTab) {
      case 'resume':
        return <Resume />;
      case 'skills':
        return <SkillsServices />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      default:
        return <Resume />;
    }
  };

  return (
    <Container className="App" maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
      <Grid container spacing={3}>
        {/* سایدبار پروفایل */}
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
          <Profile image={profileImage} />
        </Grid>

        {/* بخش اصلی */}
        <Grid size={{ xs: 12, md: 8, lg: 9 }}>
          {/* نوار بالایی و تب‌ها */}
          <Header activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* محتوای صفحه دقیقاً زیر هدر */}
          <Box sx={{ mt: 3 }}>
            {renderContent()}
          </Box>

          {/* فوتر */}
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
