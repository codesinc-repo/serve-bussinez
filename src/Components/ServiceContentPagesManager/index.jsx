import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Table } from 'react-bootstrap';

const ServiceContentPagesManager = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState('');
  const [contents, setContents] = useState([]);
  const [selectedContent, setSelectedContent] = useState('');
  const [pageNo, setPageNo] = useState('');
  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch all services
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://serve.servebiznes.com/api/all-services');
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
        setContents(response.data.services_name || []);
      } catch (error) {
        console.error('Error fetching contents:', error);
      }
    };

    fetchContents();
  }, [selectedService]);

  useEffect(() => {
    // Fetch pages for selected content
    const fetchPages = async () => {
      if (!selectedContent) return;

      try {
        const response = await axios.get(`https://serve.servebiznes.com/api/servicescontentpage/${selectedService}`);
        setPages(response.data.services_name || []);
      } catch (error) {
        console.error('Error fetching pages:', error);
      }
    };

    fetchPages();
  }, [selectedContent]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const numberOfPages = parseInt(pageNo, 10);
      let currentPage = 1;
      const existingPages = pages.reduce((acc, page) => {
        acc[page.page_no] = page.id;
        return acc;
      }, {});

      while (currentPage <= numberOfPages) {
        const pageWords = currentPage * 250;
        if (existingPages[currentPage]) {
          // Update existing page
          try {
            await axios.post('https://serve.servebiznes.com/api/storeservicecontentpages', null, {
              params: {
                service_id: selectedService,
                content_id: selectedContent,
                page_no: currentPage,
                words: pageWords,
              },
            });
            console.log(`Updated page ${currentPage}`);
          } catch (error) {
            console.error(`Error updating page ${currentPage}:`, error);
          }
        } else {
          // Add new page
          try {
            await axios.post('https://serve.servebiznes.com/api/storeservicecontentpages', null, {
              params: {
                service_id: selectedService,
                content_id: selectedContent,
                page_no: currentPage,
                words: pageWords,
              },
            });
            console.log(`Added page ${currentPage}`);
          } catch (error) {
            if (error.response && error.response.data.errors && error.response.data.errors.page_no) {
              console.warn(`Page ${currentPage} already taken, skipping.`);
            } else {
              console.error(`Error adding page ${currentPage}:`, error);
            }
          }
        }
        currentPage++;
      }

      alert('Pages processed successfully!');
      setPageNo('');
      // Fetch all pages for the selected content
      const pagesResponse = await axios.get(`https://serve.servebiznes.com/api/servicescontentpage/${selectedContent}`);
      setPages(pagesResponse.data.services_name || []);
    } catch (error) {
      console.error('Error processing pages:', error);
      alert('Failed to process pages');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (pageId) => {
    try {
      await axios.delete(`https://serve.servebiznes.com/api/deleteservicecontentpages/${pageId}`);
      alert('Page deleted successfully!');
      // Refresh pages list
      const refreshResponse = await axios.get(`https://serve.servebiznes.com/api/servicescontentpage/${selectedContent}`);
      setPages(refreshResponse.data.services_name || []);
    } catch (error) {
      console.error('Error deleting page:', error);
      alert('Failed to delete page');
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="8 mt-3">
          <h2>Service Content Pages Manager</h2>
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
            <Form.Group controlId="contentSelect">
              <Form.Label>Select Content</Form.Label>
              <Form.Control
                as="select"
                value={selectedContent}
                onChange={(e) => setSelectedContent(e.target.value)}
                required
              >
                <option value="">Select a content</option>
                {contents.map((content) => (
                  <option key={content.id} value={content.id}>
                    {content.content_name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="pageNo">
              <Form.Label>Number of Pages</Form.Label>
              <Form.Control
                type="number"
                value={pageNo}
                onChange={(e) => setPageNo(e.target.value)}
                placeholder="Enter number of pages"
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
        <Col md="8">
          <h3>Content Pages</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Page No</th>
                <th>Page Name</th>
                <th>Words</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((page) => (
                <tr key={page.id}>
                  <td>{page.id}</td>
                  <td>{page.page_no}</td>
                  <td>{page.page_name}</td>
                  <td>{page.page_no * 250}</td> {/* Calculate words dynamically */}
                  <td>
                    <Button variant="danger" onClick={() => handleDelete(page.id)}>
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

export default ServiceContentPagesManager;
