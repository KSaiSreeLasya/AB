import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  created_at: string;
}

interface GetStartedFormData {
  first_name: string;
  last_name: string;
  email: string;
  company?: string;
  phone?: string;
  job_title?: string;
  message?: string;
  created_at: string;
}

interface JobApplicationData {
  full_name: string;
  email: string;
  phone?: string;
  position: string;
  experience?: string;
  cover_letter?: string;
  resume_url?: string;
  status: string;
  created_at: string;
}

class EmailService {
  private transporter: nodemailer.Transporter | null = null;
  private isConfigured = false;

  constructor() {
    this.initialize();
  }

  private initialize() {
    try {
      // Use environment variables for email configuration
      const emailHost = process.env.EMAIL_HOST || "smtp.gmail.com";
      const emailPort = parseInt(process.env.EMAIL_PORT || "587");
      const emailUser = process.env.EMAIL_USER;
      const emailPassword = process.env.EMAIL_PASSWORD;

      if (!emailUser || !emailPassword) {
        console.log(
          "📧 Email service not configured: missing EMAIL_USER or EMAIL_PASSWORD environment variables",
        );
        return;
      }

      this.transporter = nodemailer.createTransporter({
        host: emailHost,
        port: emailPort,
        secure: emailPort === 465, // true for 465, false for other ports
        auth: {
          user: emailUser,
          pass: emailPassword,
        },
      });

      this.isConfigured = true;
      console.log("✅ Email service initialized successfully");
    } catch (error) {
      console.error("❌ Failed to initialize email service:", error);
    }
  }

  getConfigurationStatus(): boolean {
    return this.isConfigured;
  }

  private async sendEmail(
    to: string,
    subject: string,
    html: string,
  ): Promise<boolean> {
    if (!this.transporter || !this.isConfigured) {
      console.log("📧 Email service not configured, skipping email send");
      return false;
    }

    try {
      const info = await this.transporter.sendMail({
        from: `"ASOCSEMI" <${process.env.EMAIL_USER}>`,
        to,
        subject,
        html,
      });

      console.log("✅ Email sent successfully:", info.messageId);
      return true;
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      return false;
    }
  }

  async sendContactFormEmails(data: ContactFormData): Promise<boolean> {
    const { name, email, phone, company, message, created_at } = data;

    // Email to HR
    const hrSubject = `New Contact Form Submission - ${name}`;
    const hrHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
      <hr>
      <p><small>Submitted on: ${new Date(created_at).toLocaleString()}</small></p>
    `;

    // Confirmation email to user
    const userSubject = "Thank you for contacting ASOCSEMI";
    const userHtml = `
      <h2>Thank You for Contacting Us!</h2>
      <p>Dear ${name},</p>
      <p>We have received your message and appreciate you taking the time to contact us. Our team will review your inquiry and respond within 24 hours.</p>
      
      <h3>Your Message:</h3>
      <p>${message.replace(/\n/g, "<br>")}</p>
      
      <hr>
      <p>Best regards,<br>
      The ASOCSEMI Team<br>
      <a href="mailto:contact@asocsemi.com">contact@asocsemi.com</a><br>
      +91 40-71553446</p>
    `;

    try {
      const hrResult = await this.sendEmail(
        "hr@asocsemi.com",
        hrSubject,
        hrHtml,
      );
      const userResult = await this.sendEmail(email, userSubject, userHtml);

      return hrResult && userResult;
    } catch (error) {
      console.error("Failed to send contact form emails:", error);
      return false;
    }
  }

  async sendGetStartedFormEmails(data: GetStartedFormData): Promise<boolean> {
    const {
      first_name,
      last_name,
      email,
      company,
      phone,
      job_title,
      message,
      created_at,
    } = data;

    // Email to HR
    const hrSubject = `New Get Started Request - ${first_name} ${last_name}`;
    const hrHtml = `
      <h2>New Get Started Request</h2>
      <p><strong>Name:</strong> ${first_name} ${last_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${job_title ? `<p><strong>Job Title:</strong> ${job_title}</p>` : ""}
      ${message ? `<p><strong>Project Description:</strong></p><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      <hr>
      <p><small>Submitted on: ${new Date(created_at).toLocaleString()}</small></p>
    `;

    // Confirmation email to user
    const userSubject = "Thank you for your interest in ASOCSEMI";
    const userHtml = `
      <h2>Thank You for Your Interest!</h2>
      <p>Dear ${first_name},</p>
      <p>We have received your get started request and are excited about the opportunity to work with you. Our team will review your requirements and respond within 24 hours with next steps.</p>
      
      ${message ? `<h3>Your Project Description:</h3><p>${message.replace(/\n/g, "<br>")}</p>` : ""}
      
      <p>We look forward to discussing how ASOCSEMI can help bring your vision to life.</p>
      
      <hr>
      <p>Best regards,<br>
      The ASOCSEMI Team<br>
      <a href="mailto:contact@asocsemi.com">contact@asocsemi.com</a><br>
      +91 40-71553446</p>
    `;

    try {
      const hrResult = await this.sendEmail(
        "hr@asocsemi.com",
        hrSubject,
        hrHtml,
      );
      const userResult = await this.sendEmail(email, userSubject, userHtml);

      return hrResult && userResult;
    } catch (error) {
      console.error("Failed to send get started form emails:", error);
      return false;
    }
  }

  async sendJobApplicationEmails(data: JobApplicationData): Promise<boolean> {
    const {
      full_name,
      email,
      phone,
      position,
      experience,
      cover_letter,
      resume_url,
      created_at,
    } = data;

    // Email to HR
    const hrSubject = `New Job Application - ${position} - ${full_name}`;
    const hrHtml = `
      <h2>New Job Application</h2>
      <p><strong>Position:</strong> ${position}</p>
      <p><strong>Applicant:</strong> ${full_name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${experience ? `<p><strong>Experience:</strong> ${experience}</p>` : ""}
      ${cover_letter ? `<p><strong>Cover Letter:</strong></p><p>${cover_letter.replace(/\n/g, "<br>")}</p>` : ""}
      ${resume_url ? `<p><strong>Resume:</strong> <a href="${resume_url}">Download Resume</a></p>` : ""}
      <hr>
      <p><small>Submitted on: ${new Date(created_at).toLocaleString()}</small></p>
    `;

    // Confirmation email to applicant
    const userSubject = `Application Received - ${position} Position at ASOCSEMI`;
    const userHtml = `
      <h2>Application Received!</h2>
      <p>Dear ${full_name},</p>
      <p>Thank you for your interest in the <strong>${position}</strong> position at ASOCSEMI. We have successfully received your application.</p>
      
      <h3>Next Steps:</h3>
      <ul>
        <li>Our HR team will review your application</li>
        <li>If your qualifications match our requirements, we will contact you within 5-7 business days</li>
        <li>Please feel free to reach out if you have any questions</li>
      </ul>
      
      ${cover_letter ? `<h3>Your Cover Letter:</h3><p>${cover_letter.replace(/\n/g, "<br>")}</p>` : ""}
      
      <p>We appreciate your interest in joining our team!</p>
      
      <hr>
      <p>Best regards,<br>
      The ASOCSEMI HR Team<br>
      <a href="mailto:hr@asocsemi.com">hr@asocsemi.com</a><br>
      +91 40-71553446</p>
    `;

    try {
      const hrResult = await this.sendEmail(
        "hr@asocsemi.com",
        hrSubject,
        hrHtml,
      );
      const userResult = await this.sendEmail(email, userSubject, userHtml);

      return hrResult && userResult;
    } catch (error) {
      console.error("Failed to send job application emails:", error);
      return false;
    }
  }
}

export const emailService = new EmailService();
