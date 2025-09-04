import { useState, useEffect } from "react";
import { Mail, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { emailService } from "../services/emailService";

interface EmailStatusWidgetProps {
  totalContacts: number;
  totalApplications: number;
  totalGetStarted: number;
}

export default function EmailStatusWidget({ 
  totalContacts, 
  totalApplications, 
  totalGetStarted 
}: EmailStatusWidgetProps) {
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkEmailStatus();
  }, []);

  const checkEmailStatus = async () => {
    try {
      setLoading(true);
      const configured = await emailService.isConfigured();
      setIsConfigured(configured);
    } catch (error) {
      console.error("Failed to check email status:", error);
      setIsConfigured(false);
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = () => {
    if (loading) {
      return <AlertCircle className="w-6 h-6 text-yellow-500" />;
    }
    return isConfigured ? (
      <CheckCircle className="w-6 h-6 text-green-500" />
    ) : (
      <XCircle className="w-6 h-6 text-red-500" />
    );
  };

  const getStatusText = () => {
    if (loading) return "Checking email service...";
    return isConfigured 
      ? "Email notifications are working" 
      : "Email service not configured";
  };

  const getStatusDescription = () => {
    if (loading) return "Please wait...";
    return isConfigured 
      ? "Form submissions will send emails to HR and confirmations to users."
      : "Configure EMAIL_USER and EMAIL_PASSWORD environment variables to enable email notifications.";
  };

  return (
    <div className="bg-card-bg border border-border-subtle rounded-xl p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="bg-tech-blue/10 p-3 rounded-lg">
          <Mail className="w-8 h-8 text-tech-blue" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-foreground">Email Notifications</h3>
          <p className="text-foreground/70">Form submission email status</p>
        </div>
      </div>

      <div className="space-y-4">
        {/* Status */}
        <div className="flex items-center gap-3 p-4 bg-background/50 rounded-lg">
          {getStatusIcon()}
          <div>
            <p className="font-medium text-foreground">{getStatusText()}</p>
            <p className="text-sm text-foreground/70">{getStatusDescription()}</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-background/50 rounded-lg">
            <div className="text-2xl font-bold text-foreground">{totalContacts}</div>
            <div className="text-sm text-foreground/70">Contact Forms</div>
          </div>
          <div className="text-center p-4 bg-background/50 rounded-lg">
            <div className="text-2xl font-bold text-foreground">{totalApplications}</div>
            <div className="text-sm text-foreground/70">Job Applications</div>
          </div>
          <div className="text-center p-4 bg-background/50 rounded-lg">
            <div className="text-2xl font-bold text-foreground">{totalGetStarted}</div>
            <div className="text-sm text-foreground/70">Get Started Requests</div>
          </div>
        </div>

        {/* Refresh Button */}
        <button
          onClick={checkEmailStatus}
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Checking..." : "Refresh Status"}
        </button>
      </div>
    </div>
  );
}
