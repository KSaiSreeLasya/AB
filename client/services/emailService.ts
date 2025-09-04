// Client-side service for sending email notifications
// This communicates with the server email endpoints

const baseUrl = '/api/email';

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  created_at: string;
}

interface GetStartedData {
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

interface EmailResponse {
  success: boolean;
  sent?: boolean;
  message: string;
  error?: string;
}

interface EmailStatusResponse {
  success: boolean;
  data?: {
    configured: boolean;
    message: string;
  };
  error?: string;
}

class EmailService {
  async sendContactEmails(data: ContactData): Promise<boolean> {
    try {
      const response = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: EmailResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || `HTTP ${response.status}`);
      }

      console.log('✅ Contact emails sent:', result.message);
      return result.sent ?? false;
    } catch (error) {
      console.error('❌ Failed to send contact emails:', error);
      return false;
    }
  }

  async sendJobApplicationEmails(data: JobApplicationData): Promise<boolean> {
    try {
      const response = await fetch(`${baseUrl}/job-application`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: EmailResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || `HTTP ${response.status}`);
      }

      console.log('✅ Job application emails sent:', result.message);
      return result.sent ?? false;
    } catch (error) {
      console.error('❌ Failed to send job application emails:', error);
      return false;
    }
  }

  async sendGetStartedEmails(data: GetStartedData): Promise<boolean> {
    try {
      const response = await fetch(`${baseUrl}/get-started`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: EmailResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || `HTTP ${response.status}`);
      }

      console.log('✅ Get started emails sent:', result.message);
      return result.sent ?? false;
    } catch (error) {
      console.error('❌ Failed to send get started emails:', error);
      return false;
    }
  }

  async isConfigured(): Promise<boolean> {
    try {
      const response = await fetch(`${baseUrl}/status`);
      const result: EmailStatusResponse = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || `HTTP ${response.status}`);
      }

      return result.data?.configured ?? false;
    } catch (error) {
      console.error('❌ Failed to check email service status:', error);
      return false;
    }
  }
}

export const emailService = new EmailService();
