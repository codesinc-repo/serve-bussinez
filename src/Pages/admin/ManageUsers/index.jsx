import { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader";
import { Footer } from "../../../Components/Footer";
import { Table, Button, Container } from 'react-bootstrap';

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-users");
      const data = await response.json();
      if (response.ok) {
        setUsers(data.allusers || []); // Ensure we have an array even if data is missing
      } else {
        setError("Failed to fetch users");
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://serve.servebiznes.com/api/users/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setUsers(users.filter(user => user.id !== id));
      } else {
        setError('Failed to delete user');
      }
    } catch (error) {
      console.error('Error deleting user:', error);
      setError('Failed to delete user');
    }
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1 className="my-4 text-center">Manage Users</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Is Admin</th>
              <th>Created At</th>
              <th>Last Updated At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center">
                  Loading...
                </td>
              </tr>
            ) : error ? (
              <tr>
                <td colSpan="7" className="text-center text-danger">
                  {error}
                </td>
              </tr>
            ) : users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user.id}>
                  <td>{index + 1}</td>
                  <td>{user.name || 'N/A'}</td>
                  <td>{user.email || 'N/A'}</td>
                  <td>{user.is_admin ? 'Yes' : 'No'}</td>
                  <td>{new Date(user.created_at).toLocaleString()}</td>
                  <td>{new Date(user.updated_at).toLocaleString()}</td>
                  <td>
                    <Button
                      variant="danger"
                    //   onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No users available.
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

export default ManageUsers;
