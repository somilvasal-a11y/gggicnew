import React, { useState } from 'react';
import { Mail, Phone, MapPin, Users, Send, Briefcase } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Address",
      content: "Gyan Ganga Group of Institutions, Jabalpur, Madhya Pradesh, India",
      link: "#"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      content: "+91-9823591454",
      link: "tel:+919823591454"
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      content: "gggic@ggits.org",
      link: "mailto:gggic@ggits.org"
    }
  ];

  const socialLinks = [
    { icon: <Briefcase size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Send size={20} />, url: "#", label: "Twitter" },
    { icon: <Users size={20} />, url: "#", label: "Facebook" }
  ];

  const faqs = [
    {
      question: "How do I apply for GGGIC incubation?",
      answer: "You can apply through our online portal. Fill out the application form with details about your idea, team, and business plan. Our team will review and contact you within 2 weeks."
    },
    {
      question: "What is the duration of incubation?",
      answer: "The standard incubation program lasts 12 months. However, we offer flexibility based on your startup's needs. Fast-track options are also available for mature ventures."
    },
    {
      question: "Is there any cost involved?",
      answer: "GGGIC charges a minimal membership fee. Selected startups may receive co-working space at subsidized rates. We also have scholarships for promising ventures."
    },
    {
      question: "What kind of support is available?",
      answer: "We provide mentorship, infrastructure, legal assistance, IPR support, networking opportunities, funding readiness coaching, and much more."
    },
    {
      question: "Do you provide funding?",
      answer: "We don't directly provide funding, but we connect startups with investors, angel networks, and various funding schemes. We also assist in grant applications."
    },
    {
      question: "Can non-students apply?",
      answer: "Absolutely! GGGIC welcomes entrepreneurs from all backgrounds including students, alumni, professionals, and anyone with a viable idea."
    }
  ];

  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="contact-hero-subtitle">
            We'd love to hear from you. Contact us today!
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-section-title">Contact Information</h2>
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.link}
                className="contact-info-card"
              >
                <div className="contact-info-icon">
                  {info.icon}
                </div>
                <h3 className="contact-info-title">{info.title}</h3>
                <p className="contact-info-content">{info.content}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section alt-bg">
        <div className="contact-container">
          <div className="contact-form-wrapper">
            <div className="contact-form-header">
              <h2 className="contact-section-title">Send us a Message</h2>
              <p className="contact-form-subtitle">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="+91 XXXX-XXXX-XX"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="How can we help?"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Your message..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                <Send size={18} />
                Send Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Message sent successfully! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3 className="social-title">Connect With Us</h3>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.url} className="social-link" title={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-section">
        <div className="contact-container">
          <h2 className="contact-section-title">Frequently Asked Questions</h2>
          <p className="contact-intro">
            Find answers to common questions about GGGIC and our programs.
          </p>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${activeFaq === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-icon">{activeFaq === index ? '−' : '+'}</span>
                </button>
                {activeFaq === index && (
                  <div className="faq-answer">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            title="GGGIC Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.123891079277!2d79.87025407271766!3d23.129146366171835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3caccc2274b%3A0xc066b027d5fb1488!2sGyan%20Ganga%20Institute%20of%20Technology%20%26%20Sciences%20(GGITS)%20-%20Best%20Engineering%20College%20in%20Jabalpur!5e0!3m2!1sen!2sus!4v1783325859574!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="contact-container">
          <div className="newsletter-content">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-description">
              Subscribe to our newsletter to get the latest news, opportunities, and insights.
            </p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
