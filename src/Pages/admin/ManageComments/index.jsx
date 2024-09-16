import { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader";
import { Footer } from "../../../Components/Footer";
import { Table, Button, Container } from 'react-bootstrap';

const ManageComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-comments");
      const data = await response.json();
      if (response.ok) {
        setComments(data.allcomments || []); // Ensure we have an array even if data is missing
      } else {
        setError("Failed to fetch comments");
      }
    } catch (error) {
      console.error('Error fetching comments:', error);
      setError('Failed to fetch comments');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://serve.servebiznes.com/api/deletecomments/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setComments(comments.filter(comment => comment.id !== id));
      } else {
        setError('Failed to delete comment');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
      setError('Failed to delete comment');
    }
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1 className="my-4 text-center">Manage Comments</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Comments</th>
              <th>Created At</th>
              <th>Last Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="6" className="text-center text-danger">
                  {error}
                </td>
              </tr>
            ) : comments.length > 0 ? (
              comments.map((comment, index) => (
                <tr key={comment.id}>
                  <td>{index + 1}</td>
                  <td>{comment.email || 'N/A'}</td>
                  <td>{comment.comments || 'N/A'}</td>
                  <td>{new Date(comment.created_at).toLocaleString()}</td>
                  <td>{new Date(comment.updated_at).toLocaleString()}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(comment.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No comments available.
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

export default ManageComments;
