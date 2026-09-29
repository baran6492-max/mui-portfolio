import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
CardViewItem={item}onclick={()=>HandleOpenDialogItem

}

const CardView = ({ item,Onclick }) => {
  // محافظت در صورتی که دیتایی پاس داده نشده باشد
  if (!item) return null;

  const { title, description, image } = item;

  return (
    <Paper
      elevation={4}
      sx={{
        height: '100%',
        cursor: 'pointer',
        onclick={onclick}
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-4px)',
        },
      }}
    >
      {/* بخش تصویر */}
      <Box sx={{ display: 'flex', justifyContent: 'center', bgcolor: '#f5f5f5' }}>
        <img
          style={{ width: '100%', height: '200px', objectFit: 'cover' }}
          src={
            // اگر عکس در دیتا import شده باشد مستقیماً از image استفاده می‌کند
            // در غیر این صورت اگر فقط اسم فایل است با require می‌خواند
            typeof image === 'string' && !image.startsWith('data:') && !image.startsWith('http')
              ? require(`../assets/portfolio/${image}`)
              : image
          }
          alt={title || 'Portfolio Image'}
        />
      </Box>

      {/* بخش توضیحات متنی */}
      <Box sx={{ p: 2, flexGrow: 1 }}>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </Box>
    </Paper>
  );
};

export default CardView;
