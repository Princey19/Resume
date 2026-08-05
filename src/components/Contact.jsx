import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "1ef316ae-7c4d-48e4-8fff-757020d1ae7d";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ state: "idle", message: "" }); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ state: "sending", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from your portfolio site",
          from_name: "Portfolio Contact Form",
          ...formData,
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus({
          state: "success",
          message: "Thank you for your message! I will be in touch shortly.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Something went wrong.");
      }
    } catch (error) {
      setStatus({
        state: "error",
        message:
          "Sorry, something went wrong sending your message. Please try again or reach out via WhatsApp.",
      });
    }
  };

  const isSending = status.state === "sending";

  return (
    <section id="contact" className="section-padding bg-secondary-dark">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Let's Connect</h2>
        <p className="text-lg text-gray-400 mb-10">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision.
        </p>

        <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-primary-dark border border-gray-700 focus:border-accent focus:ring-accent transition duration-300 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-primary-dark border border-gray-700 focus:border-accent focus:ring-accent transition duration-300 text-white placeholder-gray-500"
            />
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-lg bg-primary-dark border border-gray-700 focus:border-accent focus:ring-accent transition duration-300 text-white placeholder-gray-500"
            ></textarea>
          </div>
          <button
            type="submit"
            id="submit-button"
            disabled={isSending}
            className={`w-full py-3 px-8 text-lg font-semibold rounded-lg bg-accent text-primary-dark transition duration-300 hover:bg-sky-300 shadow-lg hover:shadow-xl transform hover:scale-[1.01] flex items-center justify-center space-x-2 ${
              isSending ? "bg-gray-500 cursor-not-allowed" : ""
            }`}
          >
            <span>{isSending ? "Sending..." : "Send Message"}</span>
            {isSending && (
              <svg
                id="loading-spinner"
                className="animate-spin h-5 w-5 text-primary-dark"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
          </button>

          {status.state !== "idle" && status.message && (
            <div
              id="status-message"
              className={`mt-4 p-4 rounded-lg text-center font-medium ${
                status.state === "success"
                  ? "bg-green-900/50 text-green-300"
                  : status.state === "error"
                  ? "bg-red-900/50 text-red-300"
                  : ""
              }`}
            >
              {status.message}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
