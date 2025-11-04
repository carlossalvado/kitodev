import React from "react";

const ErrorPage = () => {
  return (
    <div className="error-page" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#dc3545' }}>404: NOT_FOUND</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Code: NOT_FOUND</p>
      <p style={{ fontSize: '1rem', marginBottom: '1rem' }}>ID: gru1::vzgnk-1762210941325-119785432f3f</p>
      <p style={{ fontSize: '1rem', color: '#6c757d' }}>Read our documentation to learn more about this error.</p>
    </div>
  );
};

export default ErrorPage;