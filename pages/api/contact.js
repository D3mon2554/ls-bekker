import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";
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
      // Other cases...
      default:
        toEmail = EmailTo;
        break;
    }

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

    // Use path.join to ensure correct path in production
    const emailTemplatePath = path.join(
      process.cwd(),
      "pages/emails/emailBody.html"
    );

    try {
      const emailTemplate = fs.readFileSync(emailTemplatePath, "utf8");
      const compiledTemplate = handlebars.compile(emailTemplate);
      const replacedEmailBody = compiledTemplate({ name, email, message });

      const mailOptions = {
        from: EmailFrom,
        to: toEmail,
        subject: nature,
        html: replacedEmailBody,
      };

      await transporter.sendMail(mailOptions);

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
