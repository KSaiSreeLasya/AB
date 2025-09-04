import { RequestHandler } from "express";
import { emailService } from "../services/emailService";

// Send contact form emails
export const sendContactEmails: RequestHandler = async (req, res) => {
  try {
    const { name, email, phone, company, message, created_at } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: name, email, message",
      });
    }

    const success = await emailService.sendContactFormEmails({
      name,
      email,
      phone,
      company,
      message,
      created_at: created_at || new Date().toISOString(),
    });

    res.json({
      success: true,
      sent: success,
      message: success
        ? "Contact emails sent successfully"
        : "Emails attempted but may have failed - check server logs",
    });
  } catch (error) {
    console.error("Error sending contact emails:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send contact emails",
    });
  }
};

// Send job application emails
export const sendJobApplicationEmails: RequestHandler = async (req, res) => {
  try {
    const {
      full_name,
      email,
      phone,
      position,
      experience,
      cover_letter,
      resume_url,
      status,
      created_at,
    } = req.body;

    if (!full_name || !email || !position) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: full_name, email, position",
      });
    }

    const success = await emailService.sendJobApplicationEmails({
      full_name,
      email,
      phone,
      position,
      experience,
      cover_letter,
      resume_url,
      status: status || "pending",
      created_at: created_at || new Date().toISOString(),
    });

    res.json({
      success: true,
      sent: success,
      message: success
        ? "Job application emails sent successfully"
        : "Emails attempted but may have failed - check server logs",
    });
  } catch (error) {
    console.error("Error sending job application emails:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send job application emails",
    });
  }
};

// Send get started request emails
export const sendGetStartedEmails: RequestHandler = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      company,
      phone,
      job_title,
      message,
      created_at,
    } = req.body;

    if (!first_name || !last_name || !email) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields: first_name, last_name, email",
      });
    }

    const success = await emailService.sendGetStartedFormEmails({
      first_name,
      last_name,
      email,
      company,
      phone,
      job_title,
      message,
      created_at: created_at || new Date().toISOString(),
    });

    res.json({
      success: true,
      sent: success,
      message: success
        ? "Get started emails sent successfully"
        : "Emails attempted but may have failed - check server logs",
    });
  } catch (error) {
    console.error("Error sending get started emails:", error);
    res.status(500).json({
      success: false,
      error: "Failed to send get started emails",
    });
  }
};

// Get email service status
export const getEmailServiceStatus: RequestHandler = async (req, res) => {
  try {
    const isConfigured = emailService.getConfigurationStatus();

    res.json({
      success: true,
      data: {
        configured: isConfigured,
        message: isConfigured
          ? "Email service is configured and ready"
          : "Email service is not configured. Check EMAIL_USER and EMAIL_PASSWORD environment variables.",
      },
    });
  } catch (error) {
    console.error("Error getting email service status:", error);
    res.status(500).json({
      success: false,
      error: "Failed to get email service status",
    });
  }
};
