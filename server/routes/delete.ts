import { RequestHandler } from "express";
import { supabase } from "../services/googleSheetsService";

// Delete job application
export const deleteJobApplication: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("job_applications")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting job application:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to delete job application" 
      });
    }

    res.json({ 
      success: true, 
      message: "Job application deleted successfully" 
    });
  } catch (error) {
    console.error("Error deleting job application:", error);
    res.status(500).json({ 
      success: false, 
      error: "Internal server error" 
    });
  }
};

// Delete contact message
export const deleteContact: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("contacts")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting contact:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to delete contact" 
      });
    }

    res.json({ 
      success: true, 
      message: "Contact deleted successfully" 
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ 
      success: false, 
      error: "Internal server error" 
    });
  }
};

// Delete get started request
export const deleteGetStartedRequest: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("get_started_requests")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting get started request:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to delete get started request" 
      });
    }

    res.json({ 
      success: true, 
      message: "Get started request deleted successfully" 
    });
  } catch (error) {
    console.error("Error deleting get started request:", error);
    res.status(500).json({ 
      success: false, 
      error: "Internal server error" 
    });
  }
};

// Delete newsletter subscriber
export const deleteNewsletterSubscriber: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("newsletter_subscribers")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting newsletter subscriber:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to delete newsletter subscriber" 
      });
    }

    res.json({ 
      success: true, 
      message: "Newsletter subscriber deleted successfully" 
    });
  } catch (error) {
    console.error("Error deleting newsletter subscriber:", error);
    res.status(500).json({ 
      success: false, 
      error: "Internal server error" 
    });
  }
};

// Delete resume upload
export const deleteResumeUpload: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from("resume_uploads")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Error deleting resume upload:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to delete resume upload" 
      });
    }

    res.json({ 
      success: true, 
      message: "Resume upload deleted successfully" 
    });
  } catch (error) {
    console.error("Error deleting resume upload:", error);
    res.status(500).json({ 
      success: false, 
      error: "Internal server error" 
    });
  }
};
