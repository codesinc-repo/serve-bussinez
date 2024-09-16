// ContactsTable.js
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import { collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { Table, Button, Modal, Form, Pagination } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AdminHeader from '../../../Components/AdminHeader';
import Footer from '../../../Components/Footer';

const ContactsTable = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const contactsPerPage = 20;

  useEffect(() => {
    const fetchContacts = async () => {
      setLoading(true);
      try {
        const contactsCollection = collection(db, 'contacts');
        const snapshot = await getDocs(contactsCollection);
        const contactsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsData);
      } catch (error) {
        console.error('Error fetching contacts: ', error);
        toast.error('Failed to fetch contacts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const handleEdit = contact => {
    setSelectedContact(contact);
    setFormData({
      name: contact.name,
      email: contact.email,
      message: contact.message,
    });
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      const contactRef = doc(db, 'contacts', selectedContact.id);
      await updateDoc(contactRef, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      toast.success('Contact updated successfully.');
      setShowModal(false);
      // Update the local state to reflect the changes
      setContacts(prevContacts =>
        prevContacts.map(contact =>
          contact.id === selectedContact.id ? { ...contact, ...formData } : contact
        )
      );
    } catch (error) {
      console.error('Error updating contact: ', error);
      toast.error('Failed to update contact. Please try again later.');
    }
  };

  const handleRemove = async contactId => {
    try {
      await deleteDoc(doc(db, 'contacts', contactId));
      toast.success('Contact removed successfully.');
      // Update the contacts list after deletion
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
    } catch (error) {
      console.error('Error removing contact: ', error);
      toast.error('Failed to remove contact. Please try again later.');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedContact(null);
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Pagination
  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = contacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <>
      <AdminHeader />
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h2 className="mb-4">Contact Requests</h2>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="table-responsive">
                  <Table striped bordered hover responsive>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Actions</th>
                        {/* Add more fields as necessary */}
                      </tr>
                    </thead>
                    <tbody>
                      {currentContacts.map(contact => (
                        <tr key={contact.id}>
                          <td>{contact.id}</td>
                          <td>{contact.name}</td>
                          <td>{contact.email}</td>
                          <td>{contact.message}</td>
                          <td>
                            <Button variant="primary" onClick={() => handleEdit(contact)}>
                              Edit
                            </Button>{' '}
                            <Button variant="danger" onClick={() => handleRemove(contact.id)}>
                              Remove
                            </Button>
                          </td>
                          {/* Add more fields as necessary */}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>

                {/* Pagination */}
                <div className="d-flex justify-content-center">
                  <Pagination>
                    {Array.from({ length: Math.ceil(contacts.length / contactsPerPage) }).map(
                      (item, index) => (
                        <Pagination.Item
                          key={index}
                          active={index + 1 === currentPage}
                          onClick={() => paginate(index + 1)}
                        >
                          {index + 1}
                        </Pagination.Item>
                      )
                    )}
                  </Pagination>
                </div>

                {/* Modal for editing contact */}
                <Modal show={showModal} onHide={closeModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Enter message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                      Update
                    </Button>
                  </Modal.Footer>
                </Modal>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactsTable;
