import React from 'react';
import { Lightbulb, Rocket, ShieldCheck, Landmark, Users, ArrowRight, Zap, Trophy, CheckCircle, Target, Briefcase } from 'lucide-react';
import './Home.css';

const Home = () => {
  // Features list based on GGGIC support
  const features = [
    { icon: <Users className="hero-icon" />, text: "Mentorship" },
    { icon: <Rocket className="hero-icon" />, text: "Incubation Support" },
    { icon: <Landmark className="hero-icon" />, text: "Infrastructure" },
    { icon: <ShieldCheck className="hero-icon" />, text: "IPR Guidance" },
    { icon: <Lightbulb className="hero-icon" />, text: "Industry Linkages" },
  ];

  // Impact metrics
  const impacts = [
    { icon: <Trophy className="impact-icon" />, text: "94+ Startups Incubated" },
    { icon: <Zap className="impact-icon" />, text: "100+ Patents Facilitated" },
    { icon: <Users className="impact-icon" />, text: "Mentorship, Co-working & Funding Support" },
    { icon: <Lightbulb className="impact-icon" />, text: "Innovation-led Entrepreneurship Ecosystem" },
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

  return (
    <section className="hero-section">
      {/* Decorative Background Elements */}
      <div className="hero-bubble orange"></div>
      <div className="hero-bubble indigo"></div>

      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-left">
           {/*<span className="hero-badge">
              GGGIC Jabalpur
            </span>*/}
            <h1 className="hero-heading">
              Igniting <span className="hero-heading-gradient-orange">Innovation</span>.<br />
              Empowering <span className="hero-heading-gradient-indigo">Entrepreneurs</span>.
            </h1>
            <p className="hero-copy">
              At <strong>Gyan Ganga Genesis Incubation Center (GGGIC)</strong>, Jabalpur, we transform ideas into startups and help startups grow into scalable ventures through mentorship, incubation support, infrastructure, IPR guidance, industry linkages, and access to funding opportunities.
            </p>
            <div className="hero-actions">
              <button className="hero-button-primary" type="button">
                Apply for Incubation
                <ArrowRight className="hero-icon arrow-icon" />
              </button>
              <button className="hero-button-secondary" type="button">
                Explore Programs
              </button>
            </div>
          </div>
          <div className="hero-right">
            {features.map((feature, index) => (
              <div key={index} className="hero-card">
                <div className="hero-card-icon">
                  {feature.icon}
                </div>
                <span className="hero-card-text">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Strip */}
        <div className="impact-strip">
          <div className="impact-grid">
            {impacts.map((impact, index) => (
              <div key={index} className="impact-card">
                <div className="impact-icon-wrapper">
                  {impact.icon}
                </div>
                <span className="impact-text">{impact.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* About Snapshot Section */}
        <div className="about-snapshot">
          <div className="about-content">
            <h2 className="about-heading">About GGGIC</h2>
            <p className="about-text">
              GGGIC is the dedicated startup incubation and innovation center of Gyan Ganga Group of Institutions, Jabalpur. It supports students, innovators, and founders through idea validation, mentorship, IPR support, co-working, startup guidance, and investor readiness.
            </p>
          </div>
        </div>

        {/* Why GGGIC Section */}
        <div className="section-wrapper">
          <div className="section-container">
            <h2 className="section-heading">Why GGGIC</h2>
            <div className="bullet-grid">
              {whyGGGIC.map((item, index) => (
                <div key={index} className="bullet-item">
                  <CheckCircle className="bullet-icon" />
                  <span className="bullet-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Focus Areas Section */}
        <div className="section-wrapper alt-bg">
          <div className="section-container">
            <h2 className="section-heading">Focus Areas</h2>
            <div className="bullet-grid">
              {focusAreas.map((item, index) => (
                <div key={index} className="bullet-item">
                  <Target className="bullet-icon" />
                  <span className="bullet-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services & Support Section */}
        <div className="section-wrapper">
          <div className="section-container">
            <h2 className="section-heading">Services & Support</h2>
            <div className="bullet-grid">
              {servicesSupport.map((item, index) => (
                <div key={index} className="bullet-item">
                  <Briefcase className="bullet-icon" />
                  <span className="bullet-text">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
