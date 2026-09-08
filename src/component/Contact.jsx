import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../css/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  // =========================================
  // HANDLE INPUT CHANGES
  // =========================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove status message when user starts typing again
    if (status) {
      setStatus('');
    }
  };

  // =========================================
  // SEND EMAIL
  // =========================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name.trim()) {
      setStatus('Please enter your name.');
      return;
    }

    if (!formData.email.trim()) {
      setStatus('Please enter your email address.');
      return;
    }

    if (!formData.message.trim()) {
      setStatus('Please enter your message.');
      return;
    }

    setIsSending(true);
    setStatus('');

    try {
      // =========================================
      // EMAILJS CONFIGURATION
      // =========================================
      await emailjs.send(
        'service_ye2625g',
        'template_1ava2cs',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'M1HVa3-8NSmK2zrrn'
      );

      // Success
      setStatus('success');

      // Clear form
      setFormData({
        name: '',
        email: '',
        message: '',
      });

    } catch (error) {
      console.error('Email sending failed');
      console.error('Status:', error?.status);
      console.error('Text:', error?.text);
      console.error('Full error:', error);

      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section">

      {/* =========================================
          BACKGROUND GLOWS
         ========================================= */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>

      <div className="contact-container">

        {/* =========================================
            SECTION HEADER
           ========================================= */}
        <div className="contact-header">

          <div className="contact-label">
            <span className="contact-label-line"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="contact-title">
            Let's create something
            <span> meaningful.</span>
          </h2>

          <p className="contact-intro">
            Have a project in mind, an idea to discuss, or simply want
            to connect? I'd love to hear from you.
          </p>

        </div>


        {/* =========================================
            CONTACT CONTENT
           ========================================= */}
        <div className="contact-content">

          {/* =========================================
              LEFT SIDE - CONTACT INFORMATION
             ========================================= */}
          <div className="contact-info">

            <div className="contact-info-card">

              <div className="contact-card-number">
                01
              </div>

              <div className="contact-info-heading">
                <h3>
                  Let's talk<span>.</span>
                </h3>

                <p>
                  I'm always open to discussing new projects,
                  creative ideas, opportunities, or collaborations.
                </p>
              </div>


              {/* EMAIL */}
              <a
                href="mailto:deepikasrajapaksha@gmail.com"
                className="contact-detail"
              >
                <div className="contact-detail-icon">
                  <span>✉</span>
                </div>

                <div className="contact-detail-text">
                  <span className="contact-detail-label">
                    EMAIL
                  </span>

                  <span className="contact-detail-value">
                    deepikasrajapaksha@gmail.com
                  </span>
                </div>
              </a>


              {/* LOCATION */}
              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <span>⌖</span>
                </div>

                <div className="contact-detail-text">
                  <span className="contact-detail-label">
                    LOCATION
                  </span>

                  <span className="contact-detail-value">
                    Sri Lanka
                  </span>
                </div>

              </div>


              {/* AVAILABILITY */}
              <div className="contact-detail">

                <div className="contact-detail-icon">
                  <span>✦</span>
                </div>

                <div className="contact-detail-text">
                  <span className="contact-detail-label">
                    AVAILABILITY
                  </span>

                  <span className="contact-detail-value">
                    Open to opportunities
                  </span>
                </div>

              </div>


              {/* SOCIAL LINKS */}
              <div className="contact-socials">

                <span className="contact-social-title">
                  CONNECT WITH ME
                </span>

                <div className="contact-social-links">

                  <a
                    href="https://github.com/DeepikaSRajapaksha"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://www.linkedin.com/in/deepika-sewwandi-rajapaksha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    LinkedIn
                  </a>

                  <a
                    href="https://www.behance.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Behance"
                  >
                    Behance
                  </a>

                </div>

              </div>

            </div>

          </div>


          {/* =========================================
              RIGHT SIDE - CONTACT FORM
             ========================================= */}
          <div className="contact-form-wrapper">

            <div className="contact-form-top">

              <div className="contact-card-number">
                02
              </div>

              <span className="contact-form-status">
                SEND A MESSAGE
              </span>

            </div>


            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div className="contact-field">

                <label htmlFor="name">
                  YOUR NAME
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />

              </div>


              {/* EMAIL */}
              <div className="contact-field">

                <label htmlFor="email">
                  EMAIL ADDRESS
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSending}
                />

              </div>


              {/* MESSAGE */}
              <div className="contact-field contact-message-field">

                <label htmlFor="message">
                  YOUR MESSAGE
                </label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  required
                  disabled={isSending}
                />

              </div>


              {/* STATUS MESSAGE */}
              {status === 'success' && (
                <div className="contact-success">
                  <span className="contact-success-icon">
                    ✓
                  </span>

                  <div>
                    <strong>
                      Message sent successfully!
                    </strong>

                    <p>
                      Thank you for reaching out. I'll get back
                      to you as soon as possible.
                    </p>
                  </div>
                </div>
              )}


              {status === 'error' && (
                <div className="contact-error">
                  <span className="contact-error-icon">
                    !
                  </span>

                  <div>
                    <strong>
                      Something went wrong.
                    </strong>

                    <p>
                      Please try again or contact me directly
                      through email.
                    </p>
                  </div>
                </div>
              )}


              {status &&
                status !== 'success' &&
                status !== 'error' && (
                  <div className="contact-validation">
                    {status}
                  </div>
                )}


              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                className={`contact-submit ${
                  isSending ? 'sending' : ''
                }`}
                disabled={isSending}
              >

                {isSending ? (
                  <>
                    <span className="contact-spinner"></span>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>

                    <span className="contact-submit-arrow">
                      →
                    </span>
                  </>
                )}

              </button>

            </form>

          </div>

        </div>


        {/* =========================================
            BOTTOM STATUS
           ========================================= */}
        <div className="contact-bottom">

          <div className="contact-bottom-line"></div>

          <div className="contact-bottom-content">

            <span className="contact-status-dot"></span>

            <span>
              AVAILABLE FOR NEW OPPORTUNITIES
            </span>

          </div>

          <div className="contact-bottom-line"></div>

        </div>

      </div>

    </section>
  );
};

export default Contact;