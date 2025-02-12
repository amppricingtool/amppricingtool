import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.mailersend.net",
      port: 587,
      auth: {
        user: "MS_HLblEq@trial-yzkq34069vk4d796.mlsender.net",
        pass: "mssp.YEDxG8h.ynrw7gyqrxr42k8e.Hv3C1KS",
      },
    });

    // Read the HTML content from an external file
    const htmlPathReset = path.resolve(process.cwd(), "emails/reset-password.html");
    const htmlContentReset = fs.readFileSync(htmlPathReset, "utf8");

    // Email content
    const mailOptions = {
      from: "MS_HLblEq@trial-yzkq34069vk4d796.mlsender.net",
      to: email,
      subject: "Pricing Tool - Password Reset",
      text: "You've requested a password reset. Click the link below to reset your password.",
      html: htmlContentReset,
    };

    try {
      // Send the email
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Password reset email sent" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Failed to send reset email. Please try again." });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
