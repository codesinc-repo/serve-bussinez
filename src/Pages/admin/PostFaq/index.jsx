import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Footer } from '../../../Components/Footer';
import AdminHeader from '../../../Components/AdminHeader';

const PostFaq = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [faqs, setFaqs] = useState([]);
  const maxLength = 255;

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await axios.get('https://serve.servebiznes.com/api/all-faq');
      console.log(response.data); // Log the response data to check the structure
      if (response.data && Array.isArray(response.data.faqs)) {
        setFaqs(response.data.faqs);
      } else {
        toast.error('Unexpected response format.');
      }
    } catch (error) {
      toast.error('Error fetching FAQs. Please try again.');
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (description.length > maxLength) {
      toast.error(`Description is too long. Maximum length is ${maxLength} characters.`);
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);

    try {
      const response = await axios.post('https://serve.servebiznes.com/api/storefaq', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        toast.success('FAQ posted successfully!');
        fetchFaqs(); // Refresh FAQs list
      } else {
        toast.error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(`Error: ${error.response.data.message}`);
      } else {
        toast.error('Error posting FAQ. Please try again.');
      }
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`https://serve.servebiznes.com/api/deletefaq/${id}`);
      if (response.status === 200) {
        toast.success('FAQ deleted successfully!');
        fetchFaqs(); // Refresh FAQs list
      } else {
        toast.error(`Error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      toast.error('Error deleting FAQ. Please try again.');
    }
  };

  return (
    <>
      <AdminHeader/>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
            <h1>Post FAQ</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Enter description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength={maxLength}
                />
                <Form.Text className="text-muted">
                  {description.length}/{maxLength} characters
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs={12}>
            <h2>All FAQs</h2>
            <Table responsive bordered>
              <thead>
                <tr>
                  <th>Sr#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {faqs.length > 0 ? (
                  faqs.map((faq, index) => (
                    <tr key={faq.id}>
                      <td>{index + 1}</td>
                      <td>{faq.title}</td>
                      <td>{faq.description}</td>
                      <td>
                        <Button variant="danger" onClick={() => handleDelete(faq.id)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      No FAQs available
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
      <Footer />
    </>
  );
};

export default PostFaq;
