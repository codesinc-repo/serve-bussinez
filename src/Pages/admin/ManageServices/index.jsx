import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceForm from '../../../Components/ServiceForm';
import ServiceTable from '../../../Components/ServiceTable';
import AdminHeader from '../../../Components/AdminHeader';
import { Footer } from '../../../Components/Footer';
import ServiceContentManager from '../../../Components/ServiceContentManager';
import ServiceContentPagesManager from '../../../Components/ServiceContentPagesManager';

const ManageServices = () => {
  const [updateTable, setUpdateTable] = useState(false);

  const handleServiceAdded = () => {
    setUpdateTable(!updateTable); // Toggle state to trigger table update
  };

  return (
    <>
    <AdminHeader/>
    <Container>
      <Row className="my-4  col-lg-8 col-md-12 mx-auto">
        <Col>
          <h2>Add New Service</h2>
          <ServiceForm onServiceAdded={handleServiceAdded} />
        </Col>
      </Row>
      <Row className="my-4 col-lg-8 col-md-12 mx-auto mt-4">
        <Col>
          <h2>All Services</h2>
          <ServiceTable key={updateTable} /> {/* Force re-render when service is added */}
        </Col>
      </Row>
    </Container>

    <hr/>

    <Container>
      <ServiceContentManager/>
    </Container>

    <hr/>
    <Container>
      <ServiceContentPagesManager/>
    </Container>
    <Footer/>
    </>
  );
};

export default ManageServices;
