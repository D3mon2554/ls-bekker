import nodemailer from "nodemailer";
import fs from "fs";
import handlebars from "handlebars";

export default async function handler(req, res) {
  const EmailTo = process.env.TO_EMAIL;
  const EmailFrom = process.env.FROM_EMAIL;
  const AuthUser = process.env.AUTH_USER;
  const AuthPass = process.env.AUTH_PASS;
  if (req.method === "POST") {
    const { name, email, message, nature } = req.body;

    let toEmail;
    switch (nature) {
      case "Complaints":
        toEmail = "johnny.zietsman1@gmail.com";
        break;
      case "Compliments":
        toEmail = "jonathan@sandboxlogic.com";
        break;
      // Add more cases as needed
      default:
        toEmail = EmailTo; // Default to your general email address
        break;
    }

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: AuthUser,
        pass: AuthPass,
      },
    });

    // Read the email template file
    const emailTemplate = fs.readFileSync(
      "pages/emails/emailBody.html",
      "utf8"
    );

    // Compile the template
    const compiledTemplate = handlebars.compile(emailTemplate);

    // Replace placeholders with actual data
    const replacedEmailBody = compiledTemplate({ name, email, message });

    // Setup email data
    const mailOptions = {
      from: "jonathan@sandboxlogic.com",
      to: toEmail,
      subject: nature,
      html: replacedEmailBody,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);

      // Respond to the client
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } else {
    res.status(405).end();
  }
}
