import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axios from 'axios';
import "./feedback.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FeedBackModal = () => {
  const [show, setShow] = useState(false);
  const [satisfaction, setSatisfaction] = useState(0);
  const [improvement, setImprovement] = useState("");
  const [comments, setComments] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setSuccess(false); // Reset success state when modal closes
    setError(""); // Reset error state when modal closes
  };

  const handleSubmit = async () => {
    try {
      setSubmitting(true);
      const response = await axios.post("https://serve.servebiznes.com/api/contentfeedback", {
        satisfaction,
        improvement,
        comments,
      });
      console.log("Feedback submitted:", response.data);
      toast.success("Feedback Submitted Successfully")
      setSuccess(true);
      handleClose();
    } catch (error) {
      console.error("Error submitting feedback:", error);
      if (error.response) {
        setError(error.response.data.message || "Something went wrong.");
      } else {
        setError("Network error occurred. Please try again later.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div id="feedback-form-wrapper">
        <div id="floating-icon">
          <Button
            type="button"
            className="btn btn-primary btn-sm rounded-0"
            onClick={handleShow}
          >
            Feedback
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="md" backdrop="static">
        <Modal.Header className="text-light" closeButton style={{ background: "#1e2330", color: "white" }}>
          <Modal.Title>
            Content Business Writing Services Feedback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupSatisfaction">
              <Form.Label>
                How satisfied are you with our content writing services?
              </Form.Label>
              <Form.Select
                value={satisfaction}
                onChange={(e) => setSatisfaction(parseInt(e.target.value))}
              >
                <option value={0}>Satisfied</option>
                <option value={1}>Not Satisfied</option>
                <option value={2}>Extremely Satisfied</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupImprove">
              <Form.Label>
                What can we do to improve our content writing services?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={improvement}
                onChange={(e) => setImprovement(e.target.value)}
                placeholder="Help us to improve our services..."
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupComments">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                placeholder="Write a detailed note..."
              />
            </Form.Group>
            {error && <p className="text-danger">{error}</p>}
            {success && <p className="text-success">Thank you for your feedback!</p>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} disabled={submitting}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit} disabled={submitting}>
            {submitting ? 'Submitting...' : 'Save Changes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedBackModal;
