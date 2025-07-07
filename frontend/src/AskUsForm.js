import React, { useState,useEffect } from 'react';
import abtimg from './images/combo1.png';
import enq from './images/enq.png';
import './AskUsForm.css';

const AskUsForm = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(''); // '' | 'success' | 'error'

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    try {
      const response = await fetch('https://vikahrubbers.com/send-email.php', {  // <- your PHP URL here
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === 'success') {
        setFormStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="askus-page">
      {/* Banner */}
      <div className="top-banner" style={{ backgroundImage: `url(${abtimg})` }} />

      <div className="content-section">
        <div className="left-content">
          <h2>Let’s Talk</h2>
          <p>
            Have any questions about our services, booking, or general inquiries? We’re happy to help. Fill out the form, and we’ll get in touch shortly.
          </p>
          <p>
            You can also email us directly at <strong>info@vikahrubbers.com</strong> or call <strong>+91 4049471616</strong>.
          </p>

          <img src={enq} alt="Enquiry illustration" className="left-image" />
        </div>

        <div className="right-form">
          <form onSubmit={handleSubmit} noValidate>
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 12345 67890"
              value={formData.phone}
              onChange={handleChange}
            />

            <label htmlFor="subject">Subject *</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Your question or topic"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {formStatus && (
            <div className={`form-status ${formStatus}`}>
              {formStatus === 'success' 
                ? 'Thank you for reaching out! We will respond shortly.' 
                : 'Failed to send message. Please try again later.'}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AskUsForm;

