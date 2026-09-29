import React, { useState } from 'react';
import {
  Grid,
  Typography,
  Chip,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  Work as WorkIcon,
  School as EducationIcon,
} from '@mui/icons-material';
import ResumeTimeline from '../components/ResumeTimeline';
import PageHeader from '../components/PageHeader';
import resumeData from '../utils/resumeData';

const Resume = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // دیتای ستون اول (سوابق کاری)
  const experiences = resumeData?.experiences || [
    {
      title: 'Full-Stack Developer',
      date: '2023 - Present',
      description: 'طراحی و توسعه پلتفرم کهربا با React، Material-UI و Node.js.',
    },
    {
      title: 'Frontend Developer',
      date: '2022 - 2023',
      description: 'طراحی قالب‌ها و وب‌سایت‌های واکنش‌گرا با React و Tailwind / MUI.',
    },
  ];

  // دیتای ستون دوم (تحصیلات و دوره‌ها)
  const educations = resumeData?.educations || resumeData?.certifications || [
    {
      title: 'Specialized Web Courses',
      date: '2022 - 2024',
      description: 'دوره‌های جامع پیشرفته React.js، Node.js، معماری دیتابیس و امنیت وب.',
    },
    {
      title: 'Full-Stack Engineering Certification',
      date: '2021 - 2022',
      description: 'توسعه وب‌اپلیکیشن‌های ماژولار و پیاده‌سازی APIهای RESTful.',
    },
  ];

  return (
    <Paper elevation={2} sx={{ borderRadius: 2, overflow: 'hidden', p: 3 }}>
      <PageHeader title="Resume" />

      {/* دو ستون ۶ تایی کاملاً متقارن و پر */}
      <Grid container spacing={3} sx={{ mt: 1 }}>
        {/* ستون چپ (سوابق کاری) */}
        <Grid item xs={12} md={6}>
          <ResumeTimeline
            title="Work History"
            icon={<WorkIcon />}
            items={experiences}
            onItemClick={(item) => setSelectedItem({ ...item, type: 'Work History' })}
          />
        </Grid>

        {/* ستون راست (تحصیلات / دوره‌ها) */}
        <Grid item xs={12} md={6}>
          <ResumeTimeline
            title="Education & Certifications"
            icon={<EducationIcon />}
            items={educations}
            onItemClick={(item) => setSelectedItem({ ...item, type: 'Education' })}
          />
        </Grid>
      </Grid>

      {/* مودال دیالوگ جزئیات */}
      <Dialog
        open={Boolean(selectedItem)}
        onClose={() => setSelectedItem(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{ sx: { borderRadius: 2 } }}
      >
        <DialogTitle>
          {selectedItem?.type && (
            <Chip label={selectedItem.type} size="small" color="primary" sx={{ mb: 1 }} />
          )}
          <Typography variant="h6" fontWeight="bold">
            {selectedItem?.title}
          </Typography>
          {selectedItem?.date && (
            <Typography variant="caption" color="text.secondary">
              {selectedItem.date}
            </Typography>
          )}
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
            {selectedItem?.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedItem(null)} variant="contained" size="small">
            بستن
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default Resume;
