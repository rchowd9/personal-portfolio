import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = `Name: ${formData.fullName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    
    const mailtoUrl = `mailto:chowdhuryriasat078@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact Form"
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section className="contact-section">
      <div className="section-heading">
        <p className="section-kicker">Get in touch</p>
        <h2>Contact Me</h2>
        <p className="section-description">
          Have a question, project idea, or job opportunity? Send me a message below or reach out directly.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="e.g. Alex Smith"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="e.g. alex@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">What is this about?</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select an option...
              </option>
              <option value="Job Opportunity / Hiring">Job Opportunity / Hiring</option>
              <option value="Project Collaboration">Project Collaboration</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>

        {/* Sidebar Info */}
        <div className="contact-info-card">
          <h3>Direct Contact</h3>
          <p>Prefer emailing directly or connecting on social platforms?</p>

          <div className="info-item">
            <strong>Email:</strong>
            <a href="mailto:chowdhuryriasat078@gmail.com">
              chowdhuryriasat078@gmail.com
            </a>
          </div>

          <div className="info-item">
            <strong>Phone:</strong>
            <a href="tel:5165283458">516-528-3458</a>
          </div>

          <div className="info-item">
            <strong>LinkedIn:</strong>
            <a
              href="https://linkedin.com/in/riasat-chowdhury-0a1232336/"
              target="_blank"
              rel="noopener noreferrer"
            >
              riasat-chowdhury
            </a>
          </div>

          <div className="info-item">
            <strong>GitHub:</strong>
            <a
              href="https://github.com/rchowd9"
              target="_blank"
              rel="noopener noreferrer"
            >
              rchowd9
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}