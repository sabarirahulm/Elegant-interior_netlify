import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './style.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);
  const [pincode, setPincode] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (name && email && mobile && pincode) {
      setMessage('Our Team Will Contact You!');
      setOpenSnackbar(true);

      // Reset form fields
      setName('');
      setEmail('');
      setMobile('');
      setWhatsappOptIn(false);
      setPincode('');
    } else {
      setMessage('Please fill in all fields');
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <div className="contact-div">
      <Card style={{ width: '20rem', backgroundColor: 'transparent' }} className='form-div'>
        <CardContent>
          <h3 className='contact-title'>Meet a designer</h3>
          <form className="custom-form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <TextField label="Name" variant="filled" fullWidth value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="mb-3">
              <TextField label="Email" variant="filled" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div className="mb-3">
              <TextField label="Mobile Number" variant="filled" fullWidth value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
            </div>
            <div className="mb-3 form-check">
              <FormControlLabel
                control={<Checkbox checked={whatsappOptIn} onChange={(e) => setWhatsappOptIn(e.target.checked)} />}
                label="You can reach me on WhatsApp"
              />
            </div>
            <div className="mb-3">
              <TextField label="Current Residence Pincode" variant="filled" fullWidth value={pincode} onChange={(e) => setPincode(e.target.value)} required/>
            </div>
            <Button variant="contained" color="primary" type="submit">
              Book 3D Design Session
            </Button>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <div>
        <Alert onClose={handleCloseSnackbar} severity="success">
          <div>{message}</div>
        </Alert>
        </div>
      </Snackbar>
    </div>
  );
}

export default Contact;
