import React, { useEffect, useState } from 'react';
import { Table, Spinner, Alert } from 'react-bootstrap';
import axios from 'axios';
const ServiceTable = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://serve.servebiznes.com/api/all-services');
        console.log('Full Response:', response); // Log the full response object
        console.log('Response Data:', response.data); // Log the response data

        // Check if response.data is an object and has the key 'services_name'
        if (response.data && Array.isArray(response.data.services_name)) {
          setServices(response.data.services_name);
        } else {
          setError('Unexpected data format');
        }
      } catch (error) {
        console.error('Error fetching services:', error); // Log the full error
        setError('Failed to fetch services');
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <>
    <div>
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Service Name</th>
              <th>Created At</th>
              <th>Updated At</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                <td>{service.id}</td>
                <td>{service.service_name}</td>
                <td>{new Date(service.created_at).toLocaleString()}</td>
                <td>{new Date(service.updated_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
    </>
  );
};

export default ServiceTable;
