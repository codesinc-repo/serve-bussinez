import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import AdminHeader from '../../Components/AdminHeader';
import Header from '../../Components/Header';
import { Footer } from '../../Components/Footer';

const BlogSingle = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [latestPosts, setLatestPosts] = useState([]);
  const [error, setError] = useState("");
  const imagepath = "https://serve.servebiznes.com/public/uploads/";

  useEffect(() => {
    fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-blogs");
      const data = await response.json();
      if (response.ok) {
        const selectedBlog = data.blogs.find(blog => blog.id === parseInt(id));
        setBlog(selectedBlog);
        setLatestPosts(data.blogs.slice(0, 5)); // Get the latest 5 posts
      } else {
        setError("Failed to fetch blog");
      }
    } catch (error) {
      console.error('Error fetching blog:', error);
      setError('Failed to fetch blog');
    }
  };

  return (
    <>
      <Header/>
      <Container className="mt-4">
        {error && <p className="text-danger">{error}</p>}
        <Row>
          <Col lg={8} data-aos="fade-right" data-aos-duration="1000">
            {blog ? (
              <Card>
                <Card.Header>
                  <h2>{blog.title}</h2>
                  <small className="text-muted">Posted on {new Date(blog.created_at).toLocaleDateString()}</small>
                </Card.Header>
                <Card.Body>
                  {blog.image && <img src={`${imagepath}${blog.image}`} alt={blog.title} className="img-fluid mb-3" />}
                  <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                </Card.Body>
              </Card>
            ) : (
              <p>Loading...</p>
            )}
          </Col>
          <Col lg={4} data-aos="fade-up" data-aos-duration="1000">
            <h4>Latest Posts</h4>
            <ListGroup variant="flush">
              {latestPosts.map(post => (
                <ListGroup.Item key={post.id}>
                  <a href={`/blog/${post.id}`}>{post.title}</a>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </>
  );
};

export default BlogSingle;
