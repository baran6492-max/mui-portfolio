import React from 'react';
import {  
  ArrowRight as RightIcon,
} from '@mui/icons-material';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PageHeader from '../components/PageHeader';
import skillsServicesData from '../utils/skillServicesData'; // بررسی مسیر دقیق فایل

// استخراج سرویس‌ها و مهارت‌ها از فایل دیتا
const { services = [], skills = [] } = skillsServicesData || {};

// کامپوننت کمکی برای نمایش آیکون سرویس‌ها
const CardIcon = ({ icon: IconComponent }) => {
  if (!IconComponent) return null;
  return <IconComponent fontSize="large" color="primary" />;
};

const SkillsServices = () => {
  return (
    <Paper elevation={3} sx={{ borderRadius: 2, height: '100%', p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4}>
        
        {/* ۱. عنوان اصلی صفحه */}
        <Grid item xs={12}>
          <PageHeader title="Skills & Services" />
        </Grid>

        {/* ۲. بخش خدمات (Services) */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            My Services
          </Typography>
          <Grid container spacing={3}>
            {services.map((service, serviceIndex) => (
              <Grid item xs={12} sm={6} md={4} key={serviceIndex}>
                <Card
                  variant="outlined"
                  sx={{
                    height: '100%',
                    p: 1,
                    textAlign: 'center',
                    boxShadow: 'none',
                    borderRadius: 2,
                  }}
                >
                  <CardContent>
                    <Box sx={{ mb: 1.5 }}>
                      <CardIcon icon={service.icon} />
                    </Box>
                    <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* ۳. بخش مهارت‌ها (Skills) */}
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            Skills
          </Typography>
          <Grid container spacing={3}>
            {skills.map((skillGroup, groupIndex) => (
              <Grid item xs={12} sm={6} md={4} key={groupIndex}>
                <Paper
                  variant="outlined"
                  sx={{
                    p: 2.5,
                    height: '100%',
                    borderRadius: 2,
                    backgroundColor: 'background.paper',
                  }}
                >
                  {/* عنوان هر دسته از مهارت‌ها (مثلاً Front-End یا Back-End) */}
                  <Typography variant="subtitle1" fontWeight="bold" color="primary" sx={{ mb: 1 }}>
                    {skillGroup.title}
                  </Typography>

                  {/* لیست موارد مهارت با آیکون فلش */}
                  <List dense disablePadding>
                    {skillGroup.items &&
                      skillGroup.items.map((skillItem, itemIndex) => (
                        <ListItem key={itemIndex} disableGutters sx={{ py: 0.2 }}>
                          <ListItemIcon sx={{ minWidth: 28, color: 'primary.main' }}>
                            <RightIcon fontSize="small" />
                          </ListItemIcon>
                          <ListItemText
                            primary={skillItem}
                            primaryTypographyProps={{
                              variant: 'body2',
                              color: 'text.secondary',
                            }}
                          />
                        </ListItem>
                      ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>

      </Grid>
    </Paper>
  );
};

export default SkillsServices;
