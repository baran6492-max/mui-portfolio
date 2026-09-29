import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material';

import PortfolioDialog from '../components/PortfolioDialog';
import portfolioData from '../utils/portfolioData'; // مسیر را با محل فایل خودتان هماهنگ کنید

const Portfolio = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedItem(null);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {portfolioData.map((category) => (
        <Box key={category.title} sx={{ mb: 5 }}>
          <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
            {category.title}
          </Typography>

          <Grid container spacing={3}>
            {category.items.map((item) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Card
                  onClick={() => handleOpenDialog(item)}
                  sx={{ height: '100%', cursor: 'pointer' }}
                >
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{ height: 200, objectFit: 'cover' }}
                  />

                  <CardContent>
                    <Typography variant="h6" component="h3">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}

      <PortfolioDialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        selectedItem={selectedItem}
      />
    </Container>
  );
};

export default Portfolio;
