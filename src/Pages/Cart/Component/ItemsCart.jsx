import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { OrderContext } from '../../../Context/OrderContext';
import { sendEmail } from '../../../emailService';
import { sendWhatsAppMessage } from '../../../whatsappService';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ItemsCart = () => {
  const { orderDetails, removeOrder } = useContext(OrderContext);
  const [paymentMethod, setPaymentMethod] = useState('wiseUK');
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    postalCode: "",
    bankName: "",
    accountNumber: "",
    whatsapp: ""
  });

  const subTotal = orderDetails.reduce((sum, order) => sum + order.price, 0);
  const discount = subTotal * 0.25;
  const total = subTotal - discount;
  const initialPayment = total * 0.2;  // 20% upfront payment
  const remainingPayment = total * 0.8; // 80% upon completion

  const getBankDetails = () => {
    if (paymentMethod === 'wiseUK') {
      return {
        bankName: 'Bank Name UK',
        accountNumber: 'Account Number UK'
      };
    } else if (paymentMethod === 'wiseOutsideUK') {
      return {
        bankName: 'Bank Name Outside UK',
        accountNumber: 'Account Number Outside UK'
      };
    } else {
      return {
        bankName: 'Not Provided',
        accountNumber: 'Not Provided'
      };
    }
  };

  const generateInvoice = () => {
    const bankDetails = getBankDetails();
    const doc = new jsPDF();

    // Add logo
    const logoPath = '/images/Serve Biznes logo png.png';
    doc.addImage(logoPath, 'PNG', 15, 15, 30, 30); // Positioned logo at top-left corner

    // Add company info and invoice title
    doc.setFontSize(10);
    doc.text('Serve Biznes', 50, 20);
    doc.text('56 Shoreditch High Street, London, E1 6JJ, United Kingdom', 50, 25);
    doc.text('WhatsApp: +44 7403 592190', 50, 30);
    doc.text('Email: info@servebiznes.com', 50, 35);

    // Invoice title
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0); // Black color for title
    doc.text('INVOICE', 200, 20, null, null, 'right');

    // Invoice number, date
    doc.setFontSize(10);
    doc.setTextColor(0);
    doc.text(`Invoice No: 1234567`, 200, 30, null, null, 'right');
    doc.text(`Invoice Date: ${new Date().toLocaleDateString()}`, 200, 35, null, null, 'right');

    // Customer details
    doc.setFontSize(12);
    doc.text('BILLED TO:', 15, 50);
    doc.setFontSize(10);
    doc.text(`${userDetails.name}`, 15, 55);
    doc.text(`${userDetails.address}`, 15, 60);
    doc.text(`${userDetails.whatsapp}`, 15, 65);

    // Table Headers
    doc.autoTable({
        startY: 80,
        head: [['Item', 'Quantity', 'Unit Price', 'Total']],
        body: orderDetails.map((item, index) => [
            item.topic || 'N/A',
            item.pageNo || '1',
            `£${item.price ? item.price.toFixed(2) : '0.00'}`,
            `£${item.price ? item.price.toFixed(2) : '0.00'}`,
        ]),
        headStyles: { fillColor: [45, 85, 207] }, // Blue background for headers
        styles: { fontSize: 10, cellPadding: 5 },
        margin: { left: 15, right: 15 },
    });

    // Invoice totals
    const finalY = doc.lastAutoTable.finalY;
    doc.setFontSize(10);
    doc.text(`Subtotal: £${subTotal.toFixed(2)}`, 200, finalY + 10, null, null, 'right');
    doc.text(`Discount: £${discount.toFixed(2)}`, 200, finalY + 15, null, null, 'right');
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0); // Black color for grand total
    doc.text(`Total: £${total.toFixed(2)}`, 200, finalY + 25, null, null, 'right');

    // Payment Information section
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text('PAYMENT INFORMATION:', 15, finalY + 40);
    doc.setFontSize(10);
    doc.text('Here are my GBP account details at Wise if you have account within UK:', 15, finalY + 50);
    doc.text('Account holder: Nasir Ali Riaz', 15, finalY + 55);
    doc.text('Sort code: 23-14-70', 15, finalY + 60);
    doc.text('Account number: 66590982', 15, finalY + 65);
    doc.text('IBAN: GB76 TRWI 2314 7066 5909 82', 15, finalY + 70);
    doc.text("Wise's address: 56 Shoreditch High Street, London, E1 6JJ, United Kingdom", 15, finalY + 75);

    // Policies section
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('Privacy Policies and Terms:', 15, finalY + 90);
    doc.text('1. Payments will not be refunded.', 15, finalY + 95);
    doc.text('2. Please send the payment within 12 hours after receiving this invoice.', 15, finalY + 100);
    doc.text('3. Delays in payment may result in a late fee of 5% per day.', 15, finalY + 105);
    doc.text('4. Any disputes regarding this invoice must be reported within 7 days.', 15, finalY + 110);
    doc.text('5. Serve Biznes reserves the right to cancel services if payment is not received on time.', 15, finalY + 115);
    doc.text('6. All transactions are subject to the terms and conditions listed on our website.', 15, finalY + 120);
    doc.text('7. For more information, visit: servebiznes.com/home', 15, finalY + 125);

    // Signature
    doc.setFontSize(12);
    doc.text('Signature:', 15, finalY + 145);
    const signaturePath = '/images/OnlineSignatures.net-483-Nasir Ali .png';
    doc.addImage(signaturePath, 'PNG', 15, finalY + 150, 50, 20); // Adjusted signature position and size

    // Adjust the position of the final note so it doesn't overlap with the signature
    doc.setFontSize(10);
    doc.setTextColor(0);
    const noteYPosition = finalY + 180; // Ensure this is below the signature
    doc.text(
        'Please transfer the amount and send the screenshot to the WhatsApp number and email with invoice on:',
        15,
        noteYPosition // Adjusted footer placement
    );
    doc.text('+44 7403 592190', 15, noteYPosition + 5); // Adjusted footer contact info

    // Convert to Base64 and return
    const pdfBase64 = doc.output('datauristring').split(',')[1];
    return pdfBase64;
  };

  const handleContinue = () => {
    setShowModal(true); // Show the modal for user details
  };

  const handleSendInvoice = async () => {
    if (!userDetails.whatsapp) {
      toast.error('Please enter a valid WhatsApp number.');
      return;
    }

    const pdfBase64 = generateInvoice();

    const invoiceData = {
      pdfBase64,
      total,
    };

    try {
      await sendEmail(invoiceData, userDetails);
      await sendWhatsAppMessage(invoiceData, userDetails);
      toast.success('Invoice sent successfully');
    } catch (error) {
      toast.error('Failed to send invoice.');
    }

    setShowModal(false); // Close the modal after sending the email and WhatsApp message
  };

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhoneChange = (value) => {
    // Remove the '+' sign from the phone number before saving it
    const sanitizedPhoneNumber = value ? value.replace(/^\+/, '') : '';
    
    setUserDetails({
      ...userDetails,
      whatsapp: sanitizedPhoneNumber,
    });
  };
  

  return (
    <div className="container-fluid Card_section_after_order">
            <ToastContainer />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8" data-aos="fade-up" data-aos-duration="1000">
            <div className="card">
              <div className="card-header">My Cart</div>
              <div className="card-body">
                <div className="col-md-12 text-end">
                  <button className="btn btn-orange">
                    <Link to="/AddOrder">+ Add More</Link>
                  </button>
                </div>
                {orderDetails.length > 0 ? (
                  orderDetails.map((item, index) => (
                    <div key={index}>
                      <div className="row mt-3 d-flex flex-row justify-content-between align-items-center flex-wrap">
                        <div className="col-12 col-md-6 ">
                          <p>
                            <strong>Order ID :</strong> {item.orderId || 'N/A'}
                          <b className='ms-2'> date:</b> {item.date || 'N/A'}
                          </p>
                        </div>
                        <div className="col-md-6 col-12">
                        <p>
                            <strong>Pages/Words :</strong> {item.pageNo || '0'}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="order-details" data-aos="fade-right" data-aos-duration="1000">
                        <p>
                          <strong>Topic :</strong> {item.topic || 'N/A'}
                        </p>
                        <p>
                          <strong>Service :</strong> {item.serviceName || 'not added'}
                        </p>
                        <p>
                          <strong>Subject :</strong> {item.subjectName || 'not added'}
                        </p>
                        <p>
                          <strong>Description :</strong> {item.description || 'N/A'}
                        </p>
                        <p>
                          <strong>Amount to pay :</strong> £ {item.price ? item.price.toFixed(2) : '0.00'}
                          <del>(£ {item.originalPrice ? item.originalPrice.toFixed(2) : '0.00'})</del>
                          <span style={{ color: 'green' }}>(25% Off)</span>
                        </p>
                        <p>
                          <strong>Equivalent Amount in :</strong> £ {item.price}
                        </p>
                        <div className="d-flex justify-content-start gap-2 mt-2">
                          <button className="btn btn-success me-2">
                            <i className="fas fa-check-circle" />
                           <b className='text-success'> Added</b>
                          </button>
                          <button className="btn btn-secondary me-2 bg-info">
                            <i className="fa-solid fa-edit" />
                          </button>
                          <button className="btn btn-danger bg-danger" onClick={() => removeOrder(item.orderId)}>
                            <i className="fa-solid fa-trash-alt text-light" />
                          </button>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))
                ) : (
                  <p>No items in the cart.</p>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4" data-aos="fade-up" data-aos-duration="1000">
            <div className="card">
              <div className="card-body">
                <label htmlFor="coupon-code" className="form-label">
                  <i className="fas fa-tag" /> Have A Coupon code?
                </label>
                <div className="input-group mb-3">
                  <input type="text" className="form-control" id="coupon-code" placeholder="Enter Your Code" />
                  <button className="btn btn-orange">Apply</button>
                </div>
                <a href="#" className="text-decoration-none">
                  Offer List
                </a>
              </div>
            </div>
            <div className="order-total" data-aos="fade-left" data-aos-duration="1000">
              <h5>Order Total Details</h5>
              <p>
                <strong>Sub Total:</strong> £ {subTotal.toFixed(2)}
              </p>
              <p>
                <strong>Discount:</strong> - £ {discount.toFixed(2)}
              </p>
              <p className="total-amount">
                <strong>Total:</strong> £ {total.toFixed(2)}
              </p>
              <p className="initial-payment">
                <strong>Initial Payment (20%):</strong> £ {initialPayment.toFixed(2)}
              </p>
              <p className="remaining-payment">
                <strong>Remaining Payment (80%):</strong> £ {remainingPayment.toFixed(2)}
              </p>
              <hr />
              <h5>Payment Mode</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMode"
                  id="wiseUK"
                  value="wiseUK"
                  checked={paymentMethod === 'wiseUK'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="wiseUK">
                  <i className="fas fa-university" /> Bank Transfer (UK Account)
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="paymentMode"
                  id="wiseOutsideUK"
                  value="wiseOutsideUK"
                  checked={paymentMethod === 'wiseOutsideUK'}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                />
                <label className="form-check-label" htmlFor="wiseOutsideUK">
                  <i className="fas fa-university" /> Bank Transfer (Outside UK)
                </label>
              </div>
              <button className="btn-continue mt-3" onClick={handleContinue}>Continue</button>
            </div>
            <p className="text-center mt-3">
              Applicable currency for this transaction is USD at current time.
            </p>
          </div>
        </div>
      </div>

      {/* Modal for User Details */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Your Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={userDetails.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={userDetails.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formWhatsApp" className="mt-3">
              <Form.Label>WhatsApp Number</Form.Label>
              <PhoneInput
                placeholder="Enter your WhatsApp number"
                value={userDetails.whatsapp}
                onChange={handlePhoneChange}
                defaultCountry="GB" // Set a default country if needed
                international
              />
            </Form.Group>

            <Form.Group controlId="formAddress" className="mt-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your address"
                name="address"
                value={userDetails.address}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formPostalCode" className="mt-3">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your postal code"
                name="postalCode"
                value={userDetails.postalCode}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formBankDetails" className="mt-3">
              <Form.Label>Bank Details</Form.Label>
              <Form.Text>
                {paymentMethod === 'wiseUK' ? (
                  <>
                    <p>Account Holder: Nasir Ali Riaz</p>
                    <p>Sort Code: 23-14-70</p>
                    <p>Account Number: 66590982</p>
                    <p>IBAN: GB76 TRWI 2314 7066 5909 82</p>
                    <p>Wise's Address: 56 Shoreditch High Street, London, E1 6JJ, United Kingdom</p>
                  </>
                ) : (
                  <>
                    <p>Account Holder: Nasir Ali Riaz</p>
                    <p>Swift/BIC: TRWIGB2L</p>
                    <p>IBAN: GB76 TRWI 2314 7066 5909 82</p>
                    <p>Wise's Address: 56 Shoreditch High Street, London, E1 6JJ, United Kingdom</p>
                  </>
                )}
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary" onClick={handleSendInvoice}>
            Secure Payment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemsCart;
