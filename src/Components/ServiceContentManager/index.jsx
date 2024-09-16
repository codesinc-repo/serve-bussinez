import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const ServiceContentManager = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [contentName, setContentName] = useState('');
  const [contents, setContents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch all services
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://serve.servebiznes.com/api/all-services');
        console.log('Services response:', response.data); // Log the response
        setServices(response.data.services_name);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    // Fetch contents for selected service
    const fetchContents = async () => {
      if (!selectedService) return;

      try {
        const response = await axios.get(`https://serve.servebiznes.com/api/servicescontent/${selectedService}`);
        console.log('Contents response:', response.data); // Log the response
        setContents(response.data.services_name || []); // Correct the property name
      } catch (error) {
        console.error('Error fetching contents:', error);
      }
    };

    fetchContents();
  }, [selectedService]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`https://serve.servebiznes.com/api/storeservicecontent`, null, {
        params: {
          service_id: selectedService,
          content_name: contentName,
        },
      });

      console.log('Post response:', response.data); // Log the response
      alert('Content added successfully!');
      setContentName('');
      // Refresh contents list
      const refreshResponse = await axios.get(`https://serve.servebiznes.com/api/servicescontent/${selectedService}`);
      console.log('Refresh response:', refreshResponse.data); // Log the response
      setContents(refreshResponse.data.services_name || []); // Correct the property name
    } catch (error) {
      console.error('Error posting content:', error);
      alert('Failed to add content');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (contentId) => {
    try {
      const response = await axios.delete(`https://serve.servebiznes.com/api/deleteservicecontent/${contentId}`);
      console.log('Delete response:', response.data); // Log the response
      alert('Content deleted successfully!');
      // Refresh contents list
      const refreshResponse = await axios.get(`https://serve.servebiznes.com/api/servicescontent/${selectedService}`);
      console.log('Refresh response:', refreshResponse.data); // Log the response
      setContents(refreshResponse.data.services_name || []); // Correct the property name
    } catch (error) {
      console.error('Error deleting content:', error);
      alert('Failed to delete content');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8 mt-3">
          <h2>Service Content Manager</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="serviceSelect">
              <Form.Label>Select Service</Form.Label>
              <Form.Control
                as="select"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.service_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="contentName">
              <Form.Label>Content Name</Form.Label>
              <Form.Control
                type="text"
                value={contentName}
                onChange={(e) => setContentName(e.target.value)}
                placeholder="Enter content name"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit'}
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-md-center mt-5">
        <Col md="8 mt-3">
          <h3>Service Contents</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Content Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contents.map((content) => (
                <tr key={content.id}>
                  <td>{content.id}</td>
                  <td>{content.content_name}</td>
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(content.id)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ServiceContentManager;
