import { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader";
import { Footer } from "../../../Components/Footer";
import { Table, Button, Container, Form, Modal } from 'react-bootstrap';

const ManageFAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-faq");
      const data = await response.json();
      if (response.ok) {
        setFaqs(data.faqs || []); // Ensure we have an array even if data is missing
      } else {
        setError("Failed to fetch faqs");
      }
    } catch (error) {
      console.error('Error fetching faqs:', error);
      setError('Failed to fetch faqs');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    const submitingData = {
      title: formData.title,
      description: formData.description,
      _token: csrfToken, // Include the CSRF token in the request body
    };

    try {
      setLoading(true);
      const response = await fetch("https://serve.servebiznes.com/api/storefaq", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitingData)
      });

      const data = await response.json();
      if (response.ok) {
        setFaqs([...faqs, data.faq]); // Update the FAQs list with the new FAQ
        setFormData({ title: '', description: '' }); // Reset form fields
        setShowModal(false); // Close the modal
      } else {
        setError('Failed to add faq');
      }
    } catch (error) {
      console.error('Error adding faq:', error);
      setError('Failed to add faq');
    } finally {
      setLoading(false);
      setShowModal(false); // Close the modal
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://serve.servebiznes.com/api/deletefaq/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setFaqs(faqs.filter(faq => faq.id !== id));
      } else {
        setError('Failed to delete faq');
      }
    } catch (error) {
      console.error('Error deleting faq:', error);
      setError('Failed to delete faq');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1>Manage FAQs</h1>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button onClick={() => setShowModal(true)}>Add FAQ</Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq, index) => (
              <tr key={faq.id}>
                <td>{index + 1}</td>
                <td>{faq.title}</td>
                <td>{faq.description}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(faq.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={showModal} size="lg" onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add FAQ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? "Please wait..." : "Add FAQ"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
};

export default ManageFAQ;
