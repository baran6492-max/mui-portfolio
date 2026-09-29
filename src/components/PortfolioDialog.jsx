import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const PortfolioDialog = ({ openDialog, handleCloseDialog, selectedItem }) => {
  if (!selectedItem) return null;

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      maxWidth="md"
      fullWidth
    >
      <DialogTitle sx={{ m: 0, p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div">
          {selectedItem.title || 'جزئیات نمونه‌کار'}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleCloseDialog}
          sx={{ color: (theme) => theme.palette.grey[500] }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {/* بخش تصویر */}
        {selectedItem.image && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              mb: 2,
              borderRadius: 1,
              overflow: 'hidden'
            }}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title || 'تصویر نمونه‌کار'}
              style={{
                width: '100%',
                maxHeight: '65vh',
                objectFit: 'contain'
              }}
            />
          </Box>
        )}

        {/* توضیحات */}
        <DialogContentText sx={{ color: 'text.secondary', mt: 1 }}>
          {selectedItem.description}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDialog;
