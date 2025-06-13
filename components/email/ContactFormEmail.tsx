import React from 'react';

interface ContactFormEmailProps {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
  name,
  email,
  phone,
  subject,
  message,
}) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#ffffff',
  }}>
    <div style={{
      backgroundColor: '#800020',
      padding: '20px',
      borderRadius: '8px 8px 0 0',
      marginBottom: '20px',
    }}>
      <h1 style={{
        color: '#ffffff',
        margin: '0',
        fontSize: '24px',
        textAlign: 'center',
      }}>
        New Contact Form Submission on debbiesantos.com
      </h1>
    </div>

    <div style={{
      backgroundColor: '#f9f9f9',
      padding: '20px',
      borderRadius: '0 0 8px 8px',
      border: '1px solid #e0e0e0',
    }}>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{
          color: '#800020',
          fontSize: '18px',
          marginBottom: '10px',
        }}>Contact Information</h2>
        <p style={{ margin: '5px 0' }}><strong>Name:</strong> {name}</p>
        <p style={{ margin: '5px 0' }}><strong>Email:</strong> {email}</p>
        <p style={{ margin: '5px 0' }}><strong>Phone:</strong> {phone}</p>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{
          color: '#800020',
          fontSize: '18px',
          marginBottom: '10px',
        }}>Subject</h2>
        <p style={{ margin: '5px 0' }}>{subject}</p>
      </div>

      <div>
        <h2 style={{
          color: '#800020',
          fontSize: '18px',
          marginBottom: '10px',
        }}>Message</h2>
        <div style={{
          backgroundColor: '#ffffff',
          padding: '15px',
          borderRadius: '4px',
          border: '1px solid #e0e0e0',
          whiteSpace: 'pre-wrap',
        }}>
          {message}
        </div>
      </div>
    </div>

    <div style={{
      marginTop: '20px',
      textAlign: 'center',
      fontSize: '12px',
      color: '#666666',
    }}>
      <p>This email was sent from the contact form on debbiesantos.com</p>
    </div>
  </div>
); 