import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const ServiceForm = ({ onServiceAdded }) => {
  const [serviceName, setServiceName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://serve.servebiznes.com/api/storeservice', {
        service_name: serviceName,
      });
      setServiceName('');
      setMessage('Service added successfully');
      onServiceAdded(response.data); // Notify parent component
    } catch (error) {
      setError('Failed to add service');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form.Group controlId="formServiceName">
        <Form.Label>Service Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter service name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ServiceForm;
