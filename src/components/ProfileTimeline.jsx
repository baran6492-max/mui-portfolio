import React from 'react';
import { Box, Typography } from '@mui/material';
import { PersonOutlined as PersonIcon } from '@mui/icons-material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  timelineItemClasses,
} from '@mui/lab';

const ProfileTimeline = ({ items = [] }) => {
  return (
    <Timeline
      sx={{
        p: 0,
        my: 2,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <TimelineItem key={item.title || index} sx={{ minHeight: '34px' }}>
            <TimelineSeparator>
              <TimelineDot
                variant={index === 0 ? 'filled' : 'outlined'}
                color="primary"
                sx={{ 
                  p: index === 0 ? '4px' : '3px',
                  my: 'auto'
                }}
              >
                {index === 0 && <PersonIcon sx={{ fontSize: 13 }} />}
              </TimelineDot>
              {!isLast && <TimelineConnector sx={{ bgcolor: '#eee' }} />}
            </TimelineSeparator>

            <TimelineContent sx={{ py: '6px', px: 1, textAlign: 'left' }}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.8,
                  lineHeight: 1.2,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: '#333',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {item.title}:
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: '#666',
                    fontSize: '12px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  title={item.value || item.text}
                >
                  {item.value || item.text || '—'}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        );
      })}
    </Timeline>
  );
};

export default ProfileTimeline;
