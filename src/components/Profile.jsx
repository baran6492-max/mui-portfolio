import React from 'react';
import ProfileTimeline from './ProfileTimeline';
import PersonalData from '../utils/personalData';
import { Box, Button, Paper, Typography } from '@mui/material';
import { Download as DownloadIcon } from '@mui/icons-material';
import resumeData from '../utils/resumeData';

// ۱. دریافت پراپ image
const Profile = ({ image }) => {
  const { name, title } = resumeData || { name: 'Razieh', title: 'Developer' };

  // بررسی می‌کنیم اگر PersonalData تابع است آن را اجرا کند، وگرنه خود آرایه را بردارد
  const timelineItems = typeof PersonalData === 'function' ? PersonalData() : (PersonalData || []);

  return (
    <Paper elevation={3} sx={{ p: 2, width: '100%', mx: 'auto', borderRadius: 2 }}>
      {/* باکس اصلی مشخصات */}
      <Box sx={{ lineHeight: '18px', p: '10px', textAlign: 'center' }}>
        {/* نام کاربر */}
        <Typography
          variant="subtitle2"
          sx={{
            textTransform: 'uppercase',
            fontSize: '13px',
            fontWeight: 'bold',
            letterSpacing: 1,
          }}
        >
          {name}
        </Typography>

        {/* عنوان شغلی */}
        <Typography
          variant="h6"
          sx={{
            fontSize: '12px',
            color: '#777',
            mt: 0.5,
            mb: 2,
          }}
        >
          {title}
        </Typography>

        {/* تصویر با برش زاویه‌دار */}
        <Box
          component="figure"
          sx={{
            m: 0,
            my: '-10px !important',
            WebkitClipPath: 'polygon(0% 9%, 100% 0%, 100% 94%, 0% 100%)',
            clipPath: 'polygon(0% 9%, 100% 0%, 100% 94%, 0% 100%)',
            overflow: 'hidden',
          }}
        >
          {/* ۲. قرار دادن متغیر image در src */}
          <Box
            component="img"
            src={image}
            alt={name}
            sx={{
             width: '100%',
              display: 'block',
              objectFit: 'cover'
            }}
          />
        </Box>

        {/* بخش تایم‌لاین مشخصات */}
        <ProfileTimeline items={timelineItems} />

        {/* بخش دکمه دانلود */}
        <Box sx={{ pb: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            endIcon={<DownloadIcon />}
            href="/path/to/your/cv.pdf"
            download
            sx={{
              borderRadius: '50px',
              textTransform: 'none',
              px: 3,
              fontSize: '13px',
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Profile;
