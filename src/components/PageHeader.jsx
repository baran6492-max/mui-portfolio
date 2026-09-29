import React from 'react';
import { Typography } from '@mui/material';

const PageHeader = ({ title }) => {
  return (
    <Typography
      variant="h6"
      component="h2"
      sx={{
        fontWeight: 700,
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        textUnderlineOffset: '8px', // فاصله خط زیر متن تا کلمه
        textDecorationColor: 'primary.main', // رنگ خط زیرین متناسب با تم
        mb: 4,
      }}
    >
      {title}
    </Typography>
  );
};

export default PageHeader;
