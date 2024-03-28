import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import './style.css';
import { Toaster } from '@blueprintjs/core';


const appToaster = Toaster.create({
  position:'bottom'
});

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [whatsappOptIn, setWhatsappOptIn] = useState(false);
  const [pincode, setPincode] = useState('');
  const [Message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      email: email,
      mobile: mobile,
      whatsappOptIn: whatsappOptIn,
      pincode: pincode
    };
    console.log(formData);

    // Reset form fields
    setName('');
    setEmail('');
    setMobile('');
    setWhatsappOptIn(false);
    setPincode('');

    
    setMessage('Our Team Will Contact You!')
    
  };
    
    return(
      <div className="contact-div">
        <div className='form-div'>
          <div style={{color:'green',textAlign:'center',height:'20px'}}>
          {Message && <h4>{Message}</h4>}
          </div>
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <h3 className='contact-title'>Meet a designer</h3>
            <Form className="custom-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="formBasicName" className="label">Name</label>
                <input type="text" className="form-control" id="formBasicName" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="formBasicEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="formBasicEmail" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </div>
              <div className="mb-3">
                <label htmlFor="formBasicMobile" className="form-label">Mobile Number</label>
                <input type="tel" className="form-control" id="formBasicMobile" placeholder="Enter your mobile number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="formBasicCheckbox" checked={whatsappOptIn} onChange={(e) => setWhatsappOptIn(e.target.checked)} />
                <label className="form-check-label" htmlFor="formBasicCheckbox"> You can reach me on WhatsApp</label>
              </div>
              <div className="mb-3">
                <label htmlFor="formBasicPincode" className="form-label">Current Residence Pincode</label>
                <input type="text" className="form-control" id="formBasicPincode" placeholder="Enter your pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
              </div>
              <Button variant="primary" type="submit">
                Book 3D Design Session
              </Button>
            </Form>
          </Card.Body>
        </Card>
        </div>
      </div>
    );
}

export default Contact;
