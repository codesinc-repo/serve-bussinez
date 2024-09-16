// src/emailService.js

import axios from "axios";

export const sendEmail = async (invoiceData, userDetails) => {
  const apiKey = "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"; // Your Brevo API key
  const endpoint = "https://api.brevo.com/v3/smtp/email";

  const emailData = {
    sender: { name: "servebiznes", email: "support@servebiznes.com" }, // Replace with a verified email
    to: [{ email: userDetails.email, name: userDetails.name }],
    subject: "Your servebiznes Invoice",
    htmlContent: `
      <html>
        <body>
          <h1>servebiznes Invoice</h1>
          <p>Dear ${userDetails.name},</p>
          <p>Thank you for your purchase! Please find your invoice attached.</p>
          <p>Total: $${invoiceData.total}</p>
        </body>
      </html>
    `,
    attachment: [
      {
        content: invoiceData.pdfBase64,
        name: "servebiznes-invoice.pdf",
        type: "application/pdf",
      },
    ],
  };

  try {
    await axios.post(endpoint, emailData, {
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
    }
  }
};
