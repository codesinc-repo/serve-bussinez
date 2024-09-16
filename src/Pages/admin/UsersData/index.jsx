import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Modal, Button, Form } from "react-bootstrap";
import Footer from "../../../Components/Footer";
import TopHeader from "../../../Components/TopHeader";
import AdminHeader from "../../../Components/AdminHeader";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const usersCollection = collection(db, "Users");
      const snapshot = await getDocs(usersCollection);
      const usersData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersData);
    } catch (error) {
      console.error("Error fetching users: ", error);
      toast.error("Failed to fetch users. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (userId) => {
    const userToEdit = users.find((user) => user.id === userId);
    if (userToEdit) {
      setCurrentUserId(userId);
      setName(userToEdit.name);
      setEmail(userToEdit.email);
      setShowModal(true);
    }
  };

  const handleDelete = async (userId) => {
    setLoading(true);
    try {
      const userRef = doc(db, "Users", userId);
      await deleteDoc(userRef);
      toast.success("User deleted successfully!");
      fetchUsers(); // Refresh users after deletion
    } catch (error) {
      console.error("Error deleting user: ", error);
      toast.error("Failed to delete user. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (currentUserId) {
        const userRef = doc(db, "Users", currentUserId);
        await updateDoc(userRef, {
          name,
          email,
        });
        toast.success("User updated successfully!");
      } else {
        await addDoc(collection(db, "Users"), {
          name,
          email,
        });
        toast.success("User added successfully!");
      }
      setCurrentUserId(null);
      setName("");
      setEmail("");
      fetchUsers(); // Refresh users after update
      setShowModal(false);
    } catch (error) {
      console.error("Error updating user: ", error);
      toast.error("Failed to update user. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <TopHeader />
    <AdminHeader />
    <main>
    <div className="container mt-5">
        <h2 className="mb-4 text-center">Users Data</h2>
        <div className="row">
          <div className="col-md-12">
            <table className="table table-striped">
              <thead>
                <tr className="text-center">
                  <th>Name</th>
                  <th>Email</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="text-center">
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-primary me-2"
                        onClick={() => handleEdit(user.id)}
                        disabled={loading}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDelete(user.id)}
                        disabled={loading}
                      >
                        {loading ? "Deleting...." : "Delete"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
      <Footer />

      {/* Edit User Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentUserId ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleUpdate}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="editName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="editEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Updating...."  : "Update"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default UsersData;
