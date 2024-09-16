import React, { useState, useEffect } from 'react';
import { Table, Button, Container } from 'react-bootstrap';
import AdminHeader from '../../../Components/AdminHeader';
import {Footer} from '../../../Components/Footer';

const ManageFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://serve.servebiznes.com/api/all-feedbacks');
      const data = await response.json();

      if (response.ok) {
        setFeedbacks(data.feedbacks);
      } else {
        setError('Failed to fetch feedbacks');
      }
    } catch (error) {
      console.error('Error fetching feedbacks:', error);
      setError('Failed to fetch feedbacks');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://serve.servebiznes.com/api/deletefeedback/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setFeedbacks(feedbacks.filter(feedback => feedback.id !== id));
      } else {
        setError('Failed to delete feedback');
      }
    } catch (error) {
      console.error('Error deleting feedback:', error);
      setError('Failed to delete feedback');
    }
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1 className="my-4 text-center">Manage Feedbacks</h1>
        {loading ? <p>Loading...</p> : null}
        {error ? <p>{error}</p> : null}
        {!loading && !error && (
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Writing Services</th>
                <th>Improvement</th>
                <th>Comments</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={feedback.id}>
                  <td>{index + 1}</td>
                  <td>{feedback.writing_services || 'N/A'}</td>
                  <td>{feedback.improvement || 'N/A'}</td>
                  <td>{feedback.comments || 'N/A'}</td>
                  <td>{new Date(feedback.created_at).toLocaleString()}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(feedback.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ManageFeedbacks;
