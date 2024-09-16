import { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader";
import { Footer } from "../../../Components/Footer";
import { Table, Button, Container } from 'react-bootstrap';

const ManageNewsLetters = () => {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchNewsLetters();
  }, []);

  const fetchNewsLetters = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-subscribeus");
      const data = await response.json();
      if (response.ok) {
        setNewsletters(data.allnewsletters || []); // Ensure we have an array even if data is missing
      } else {
        setError("Failed to fetch newsletters");
      }
    } catch (error) {
      console.error('Error fetching newsletters:', error);
      setError('Failed to fetch newsletters');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://serve.servebiznes.com/api/deletesubscribeus/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setNewsletters(newsletters.filter(newsletter => newsletter.id !== id));
      } else {
        setError('Failed to delete newsletter');
      }
    } catch (error) {
      console.error('Error deleting newsletter:', error);
      setError('Failed to delete newsletter');
    }
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1 className="my-4 text-center">Manage NewsLetters</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Last Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="5" className="text-center text-danger">
                  {error}
                </td>
              </tr>
            ) : newsletters.length > 0 ? (
              newsletters.map((newsletter, index) => (
                <tr key={newsletter.id}>
                  <td>{index + 1}</td>
                  <td>{newsletter.email || 'N/A'}</td>
                  <td>{new Date(newsletter.created_at).toLocaleString()}</td>
                  <td>{new Date(newsletter.updated_at).toLocaleString()}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(newsletter.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center">
                  No newsletters available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
      <Footer />
    </>
  );
};

export default ManageNewsLetters;
