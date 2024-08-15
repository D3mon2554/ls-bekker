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
        toEmail = "info@lsbekker.co.za";
        break;
      case "Compliments":
        toEmail = "info@lsbekker.co.za";
        break;
      case "General Information":
        toEmail = "info@lsbekker.co.za";
        break;
      case "My Account Status":
        toEmail = "accounts@lsbekker.co.za";
        break;
      case "New Hostel Application":
        toEmail = "info@lsbekker.co.za";
        break;
      case "New School Application":
        toEmail = "school@lsbekker.co.za";
        break;
      case "Exemptions":
        toEmail = "hr@lsbekker.com";
        break;
      case "Other":
        toEmail = "info@lsbekker.co.za";
        break;

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
      tls: {
        rejectUnauthorized: false,
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
      from: EmailFrom,
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
