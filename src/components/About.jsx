import React from 'react';
import { CheckCircle, Target, Briefcase, Lightbulb, Trophy, } from 'lucide-react';
import './About.css';
//import { CheckCircle, Target, Briefcase, Users, Lightbulb, Zap, Trophy, Award } from 'lucide-react';

const About = () => {
  // About Overview
  const aboutPoints = [
    "Dedicated startup incubation and innovation center",
    "Part of Gyan Ganga Group of Institutions, Jabalpur",
    "Supports students, innovators, and founders",
    "Idea validation to execution support",
    "Over 94+ startups incubated",
    "100+ patents facilitated"
  ];

  // Why GGGIC
  const whyGGGIC = [
    "Interdisciplinary innovation environment",
    "Mentorship & strategic guidance",
    "Idea-to-execution support",
    "IPR, compliance & startup support",
    "Co-working & infrastructure",
    "Funding readiness & exposure",
  ];

  // Focus Areas
  const focusAreas = [
    "Innovation & Technology",
    "Rural Development",
    "Women Entrepreneurship",
    "Vocal for Local / Local Enterprise",
    "Student-led Startups & Campus Innovation",
    "Sustainable and socially relevant ventures",
  ];

  // Services & Support
  const servicesSupport = [
    "Idea Validation",
    "Mentorship & Guidance",
    "Prototype / Product Support",
    "Legal & Compliance Assistance",
    "IPR / Patent Support",
    "Funding Readiness",
    "Co-working & Infrastructure",
    "Training & Skill Development",
  ];

  // Impact Stats
  const stats = [
    { number: "94+", label: "Startups Incubated" },
    { number: "100+", label: "Patents Facilitated" },
    { number: "6", label: "Focus Areas" },
    { number: "8+", label: "Services Offered" }
  ];

  // Who Can Apply
  const whoCanApply = [
    "Students",
    "Student innovators and project teams",
    "Alumni entrepreneurs",
    "Early-stage startups",
    "Women entrepreneurs",
    "Rural innovators"
  ];

  // Incubation Pathways
  const incubationPathways = [
    {
      title: "Pre-Incubation",
      description: "For ideas in early-stage with foundational support needed"
    },
    {
      title: "Incubation",
      description: "For startups ready to be developed with comprehensive support"
    },
    {
      title: "Student Innovation Support",
      description: "Dedicated programs for student-led projects and ideas"
    },
    {
      title: "Special Focus Support",
      description: "Tailored support for women and rural entrepreneurs"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1 className="about-hero-title">
            About <span className="gradient-text">GGGIC</span>
          </h1>
          <p className="about-hero-subtitle">
            Empowering Innovation, Building Entrepreneurs
          </p>
        </div>
      </section>

      {/* About Overview Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Who We Are</h2>
          <p className="about-intro-text">
            <strong>GGGIC</strong> is the dedicated incubation and entrepreneurship development platform of Gyan Ganga Group of Institutions, Jabalpur. We promote innovation, entrepreneurship, and startup creation through mentoring, startup guidance, co-working, intellectual property facilitation, and ecosystem linkages. Our comprehensive support mechanisms are designed to transform ideas into sustainable businesses and impactful ventures.
          </p>
          <div className="about-grid">
            {aboutPoints.map((point, index) => (
              <div key={index} className="about-point">
                <CheckCircle className="about-point-icon" />
                <span className="about-point-text">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="about-section alt-bg">
        <div className="about-container">
          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="vision-mission-card">
              <div className="vm-icon vision-icon">
                <Target size={32} />
              </div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-content">
                To build a robust, inclusive, and innovation-driven entrepreneurial ecosystem that transforms ideas into sustainable businesses and impactful ventures.
              </p>
            </div>

            {/* Mission */}
            <div className="vision-mission-card">
              <div className="vm-icon mission-icon">
                <Lightbulb size={32} />
              </div>
              <h3 className="vm-title">Our Mission</h3>
              <ul className="vm-mission-list">
                <li>Encourage entrepreneurial thinking</li>
                <li>Support startup journeys through incubation and mentoring</li>
                <li>Provide access to IPR, compliance, and growth support</li>
                <li>Build strong linkages with mentors, industry, and institutions</li>
                <li>Promote innovation in technology, local enterprise, and social impact</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="about-container">
          <h2 className="about-section-title">Our Impact</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <Trophy className="stat-icon" />
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why GGGIC Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Why Choose GGGIC</h2>
          <div className="features-grid">
            {whyGGGIC.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <Lightbulb size={24} />
                </div>
                <h3 className="feature-title">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="about-section alt-bg">
        <div className="about-container">
          <h2 className="about-section-title">Focus Areas</h2>
          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <div key={index} className="focus-card">
                <Target className="focus-icon" />
                <span className="focus-text">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Support Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Services & Support</h2>
          <div className="services-grid">
            {servicesSupport.map((service, index) => (
              <div key={index} className="service-card">
                <Briefcase className="service-icon" />
                <span className="service-text">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="about-section alt-bg">
        <div className="about-container">
          <h2 className="about-section-title">Who Can Apply</h2>
          <p className="about-intro">
            GGGIC welcomes innovators and entrepreneurs from all backgrounds and experience levels.
          </p>
          <div className="who-can-apply-grid">
            {whoCanApply.map((applicant, index) => (
              <div key={index} className="applicant-card">
                <div className="applicant-number">{index + 1}</div>
                <span className="applicant-text">{applicant}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Incubation Pathways Section */}
      <section className="about-section">
        <div className="about-container">
          <h2 className="about-section-title">Incubation Pathways</h2>
          <p className="about-intro">
            Choose the pathway that best fits your stage of entrepreneurial journey.
          </p>
          <div className="pathways-grid">
            {incubationPathways.map((pathway, index) => (
              <div key={index} className="pathway-card">
                <div className="pathway-header">
                  <div className="pathway-number">{index + 1}</div>
                  <h3 className="pathway-title">{pathway.title}</h3>
                </div>
                <p className="pathway-description">{pathway.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Join Our Innovation Ecosystem?</h2>
            <p className="cta-description">
              Whether you're a student with an idea, an innovator looking for support, or a founder ready to scale, GGGIC is here to help you succeed.
            </p>
            <div className="cta-buttons">
              <button className="cta-button primary">Apply for Incubation</button>
              <button className="cta-button secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
