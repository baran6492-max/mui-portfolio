import React, { useState } from 'react';
import { Box, Button, Snackbar, TextField, Typography, Alert } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const validationErrors = {};

    if (!formData.name.trim()) validationErrors.name = 'نام الزامی است';

    if (!formData.email.trim()) {
      validationErrors.email = 'ایمیل الزامی است';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'ایمیل وارد شده معتبر نیست';
    }

    if (!formData.message.trim()) validationErrors.message = 'پیام الزامی است';

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validate()) return;

    console.log('پیام ارسال شد:', formData);

    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
  };

  return (
    <Box p={2} component="section">
      <Typography variant="h5" mb={2}>
        Contact us
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={Boolean(errors.name)}
          helperText={errors.name}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={Boolean(errors.email)}
          helperText={errors.email}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          error={Boolean(errors.message)}
          helperText={errors.message}
          margin="normal"
          multiline
          rows={4}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Submmit
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" variant="filled">
          پیام شما با موفقیت ارسال شد!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
