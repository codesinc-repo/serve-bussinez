import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const BlogsCards = ({ display }) => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch("https://serve.servebiznes.com/api/all-blogs");
      const data = await response.json();
      if (response.ok) {
        setBlogs(data.blogs || []); // Ensure we have an array even if data is missing
      } else {
        setError("Failed to fetch blogs");
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to fetch blogs');
    }
  };

  return (
    <>
      <div className="blog-cards">
        <div className="container">
          {error && <p className="text-danger">{error}</p>}
          {blogs.map((blog, index) => (
            <div key={blog.id} className="card" data-aos="zoom-in" data-aos-delay={`${(index + 1) * 100}`} data-aos-duration="1000">
              <div className="card__header">
                <Link to={`/blog/${blog.id}`}>
                  <img
                    src={blog.image ? `https://serve.servebiznes.com/public/uploads/${blog.image}` : './images/default_blog_image.jpg'}
                    alt="card__image"
                    className="card__image"
                    width={600}
                  />
                </Link>
              </div>
              <div className="card__body">
                <Link to={`/blog/${blog.id}`}>
                  <span className="tag tag-blue">Category</span>
                </Link>
                <Link to={`/blog/${blog.id}`}>
                  <h4>{blog.title}</h4>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: blog.content.length > 100 ? `${blog.content.substring(0, 100)}...` : blog.content }} />
              </div>
              <div className={`card__footer ${display}`}>
                <div className="user">
                  <img
                    src="https://i.pravatar.cc/40?img=1"
                    alt="user__image"
                    className="user__image"
                  />
                  <div className="user__info">
                    <h5>Jane Doe</h5>
                    <small>{new Date(blog.created_at).toLocaleDateString()}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
