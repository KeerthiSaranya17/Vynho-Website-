
import { toast } from "sonner";
import { useState } from "react";

const ContactForm = () => {
    const projectTypes = [
    "Custom Software Development",
    "AI Solution",
    "SaaS Platform",
    "Web Application",
    "Mobile Application",
    "UI/UX Design",
    "IT Consulting",
    "Other",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your full name.");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message.");
      return;
    }

    if (!formData.projectType) {
      toast.error("Please select a project type.");
      return;
    }

    try {
      setIsSubmitting(true);

      // TODO: Replace this with your API call
      const response = await fetch("https://formspree.io/f/maqzvyyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send");
      }

      toast.success("Message sent successfully!", {
        description:
          "Thank you for contacting Vynho. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
    <div className="rounded-3xl border border-white/10 bg-white/0.03 p-6 backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.10)] hover:border-primary-500/30">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm text-text-secondary">
                      Full Name
                    </label>

                    <input
                      name="name"
                      type="text"
                      value={formData.name}
                      placeholder="John Doe"
                      onChange={handleChange}
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-text-secondary">
                      Email Address
                    </label>

                    <input
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={formData.email}
                      placeholder="vynho@gmail.com"
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500/30"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-text-secondary">
                      Project Type
                    </label>

                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                       className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500/30"

                    >
                      <option value="">Select Project Type</option>

                      {projectTypes.map((type) => (
                        <option className="bg-black border"  key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm text-text-secondary">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={2}
                      placeholder="Tell us about your project..."
                      className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white outline-none focus:border-primary-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-linear-to-r from-indigo-500 to-violet-600 hover:shadow-[0_0_30px_rgba(99,102,241,0.4)] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
                <div className="absolute right-0 top-1/2 -z-10 h-125 w-125 -translate-y-1/2 rounded-full bg-primary-500/10 blur-[140px]" />
              </div>
    </>
  )
}

export default ContactForm