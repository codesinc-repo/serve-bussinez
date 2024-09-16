import { useEffect, useState } from "react";
import { Table, Button, Container, Form } from 'react-bootstrap';
import ReactQuill from 'react-quill'; 
import 'react-quill/dist/quill.snow.css'; 
import AdminHeader from "../../../Components/AdminHeader";

const ManageBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ title: '', image: '', description: '' });
  const [editing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const imagepath = "https://serve.servebiznes.com/public/uploads/";

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-blogs");
      const data = await response.json();
      if (response.ok) {
        setBlogs(data.blogs || []); 
      } else {
        setError("Failed to fetch blogs");
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleQuillChange = (value) => {
    setForm({ ...form, description: value });
  };

  const handleImageChange = (e) => {
    setForm({ ...form, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('image', form.image);
    formData.append('content', form.description);

    let method = 'POST';
    let url = 'https://serve.servebiznes.com/api/storeblogs';

    if (editing) {
      method = 'PUT';
      url = `https://serve.servebiznes.com/api/blogs/update/${editId}`;
    }

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          formData,
        })
      });

      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const responseData = await response.json();

        if (response.ok) {
          fetchBlogs(); 
          setForm({ title: '', image: '', description: '' });
          setEditing(false);
          setEditId(null);
        } else {
          setError(`Failed to submit blog: ${responseData.message}`);
        }
      } else {
        const textResponse = await response.text();
        setError(`Unexpected response: ${textResponse}`);
        setForm({ title: '', description: '', image: '' });
      }
    } catch (error) {
      console.error('Error submitting blog:', error);
      setError(`Failed to submit blog: ${error.message}`);
    } finally {
      setIsLoading(false);
      setForm({ title: '', description: '', image: '' });
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`https://serve.servebiznes.com/api/deleteblogs/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setBlogs(blogs.filter(blog => blog.id !== id));
      } else {
        setError('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setError('Failed to delete blog');
    }
  };

  const handleEdit = (blog) => {
    setForm({ title: blog.title, image: '', description: blog.content });
    setEditing(true);
    setEditId(blog.id);
  };

  return (
    <>
      <AdminHeader />
      <Container>
        <h1 className="my-4 text-center">Manage Blogs</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleImageChange}
              required={!editing}
            />
          </Form.Group>

          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <ReactQuill
              value={form.description}
              onChange={handleQuillChange}
              theme="snow"
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-3">
            {isLoading ? (
              "Processing..."
            ) : (
              editing ? 'Update Blog' : 'Create Blog'
            )}
          </Button>
        </Form>

        <Table striped bordered hover className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Created At</th>
              <th>Updated At</th>
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
            ) : blogs.length > 0 ? (
              blogs.map((blog, index) => (
                <tr key={blog.id}>
                  <td>{index + 1}</td>
                  <td>{blog.title}</td>
                  <td>
                    <img src={blog.image ? `${imagepath}${blog.image}` : 'default_image_url_here'} alt={blog.title} width="100" />
                  </td>
                  <td>{new Date(blog.created_at).toLocaleString()}</td>
                  <td>{new Date(blog.updated_at).toLocaleString()}</td>
                  <td>
                    <Button
                      variant="secondary"
                      onClick={() => handleEdit(blog)}
                      className="me-2"
                    >
                      Update
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(blog.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  No blogs available.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default ManageBlogs;
