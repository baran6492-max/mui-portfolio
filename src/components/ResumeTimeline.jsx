import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Box, Typography } from '@mui/material';

const ResumeTimeline = ({ title, icon, items = [], onItemClick }) => {
  return (
    <Box>
      {/* تیتر بالای تایم‌لاین */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: '#fff',
            p: 1,
            borderRadius: '50%',
            display: 'flex',
          }}
        >
          {icon}
        </Box>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </Box>

      {/* لیست رویدادها */}
      <Timeline sx={{ p: 0, m: 0 }}>
        {items.map((item, index) => (
          <TimelineItem
            key={index}
            sx={{
              '&::before': { display: 'none' }, // حذف فضای خالی پیش‌فرض سمت راست
              cursor: onItemClick ? 'pointer' : 'default',
              mb: 2,
            }}
            onClick={() => onItemClick && onItemClick(item)}
          >
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary" />
              {index < items.length - 1 && <TimelineConnector />}
            </TimelineSeparator>

            <TimelineContent sx={{ py: '6px', px: 2 }}>
              {/* تیتر شغل/مدرک */}
              <Typography variant="subtitle1" fontWeight="600" color="primary">
                {item.title}
              </Typography>

              {/* تاریخ با فاصله مناسب در خط جدا */}
              {item.date && (
                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  sx={{ mt: 0.2, mb: 0.5, fontWeight: 500 }}
                >
                  {item.date}
                </Typography>
              )}

              {/* توضیحات */}
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                {item.description}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default ResumeTimeline;
