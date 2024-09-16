import axios from "axios";

export const sendWhatsAppMessage = async (invoiceData, userDetails) => {
  const accountSid = 'AC0b8d5e28753367c732970ebba3056884'; // Your Twilio Account SID
  const authToken = '00a18e7a97ca67826785c1e02472f4dc'; // Your Twilio Auth Token
  const from = '+447365891276'; // Replace with your Twilio WhatsApp number
  const to = `${userDetails.whatsapp}`; // User's WhatsApp number

  const body = `Hello ${userDetails.name}, your invoice total is $${invoiceData.total}.`;

  const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

  // Base64 encode the Account SID and Auth Token
  const authHeader = `Basic ${btoa(`${accountSid}:${authToken}`)}`;

  const data = new URLSearchParams({
    "From": from,
    "To": to,
    "Body": body
  });

  try {
    const response = await axios.post(url, data, {
      headers: {
        "Authorization": authHeader,
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    console.log("WhatsApp invoice sent successfully:", response.data);
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error sending WhatsApp message:", error.response.data);
    } else {
      // Network error or request was not sent
      console.error("Error sending WhatsApp message:", error.message);
    }
  }
};
