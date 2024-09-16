import { useEffect, useState } from "react";
import AdminHeader from "../../../Components/AdminHeader";
import { Footer } from "../../../Components/Footer";
import { Table, Button, Container } from 'react-bootstrap';

const ManageContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-contactus");
      const data = await response.json();
      if (response.ok) {
        setContacts(data.allcontacts || []); // Ensure we have an array even if data is missing
      } else {
        setError("Failed to fetch contacts");
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://serve.servebiznes.com/api/deletecontactus/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setContacts(contacts.filter(contact => contact.id !== id));
      } else {
        setError('Failed to delete contact');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
      setError('Failed to delete contact');
    }
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1 className="my-4 text-center">Manage Contacts</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Country</th>
              <th>Phone</th>
              <th>Comments</th>
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
            ) : contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={contact.id}>
                  <td>{index + 1}</td>
                  <td>{contact.name || 'N/A'}</td>
                  <td>{contact.email || 'N/A'}</td>
                  <td>{contact.country || 'N/A'}</td>
                  <td>{contact.phone || 'N/A'}</td>
                  <td>{contact.comments || 'N/A'}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(contact.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center">
                  No contacts available.
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

export default ManageContacts;
