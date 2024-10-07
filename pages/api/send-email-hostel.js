import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, nature } = req.body;

    // Email addresses
    const constantEmail = "info@lsbekker.co.za";
    const dynamicEmail = email;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "johnny.zietsman1@gmail.com",
        pass: "gghq lmmv oumo ahbw",
      },
      tls: {
        // Do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    // Email parameters
    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: [constantEmail, dynamicEmail],
      subject: nature,
      html: message, // Use the HTML content for the email body
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      // Respond to the client
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Failed to send email:", error); // Enhanced error logging
      res.status(500).json({
        success: false,
        message: "Failed to send email",
        error: error.message,
      });
    }
  } else {
    res.status(405).end();
  }
}
