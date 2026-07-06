import React, { useState } from 'react';
import { Lightbulb, Users, Zap, ShieldCheck, Briefcase, DollarSign, Home, BookOpen, ArrowRight, Check } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  // Main Services
  const mainServices = [
    {
      icon: <Lightbulb size={32} />,
      title: "Idea Validation",
      description: "Validate your innovative ideas through structured feedback, market research, and feasibility analysis from industry experts.",
      features: ["Market research", "Feasibility study", "Expert feedback", "Pitch refinement"]
    },
    {
      icon: <Users size={32} />,
      title: "Mentorship & Guidance",
      description: "Get personalized guidance from experienced entrepreneurs, industry leaders, and subject matter experts.",
      features: ["One-on-one mentoring", "Group workshops", "Expert network access", "Industry insights"]
    },
    {
      icon: <Zap size={32} />,
      title: "Prototype / Product Support",
      description: "Technical support and resources to develop, test, and refine your product or service.",
      features: ["Development guidance", "Testing support", "Prototyping resources", "Design assistance"]
    },
    {
      icon: <ShieldCheck size={32} />,
      title: "Legal & Compliance Assistance",
      description: "Navigate legal requirements with expert guidance on compliance, documentation, and regulatory needs.",
      features: ["Legal consultation", "Compliance support", "Documentation help", "Registration assistance"]
    },
    {
      icon: <Briefcase size={32} />,
      title: "IPR / Patent Support",
      description: "Protect your intellectual property with expert guidance on patents, trademarks, and copyrights.",
      features: ["Patent filing", "Trademark registration", "IP protection strategy", "Documentation support"]
    },
    {
      icon: <DollarSign size={32} />,
      title: "Funding Readiness",
      description: "Prepare your startup for investment through pitch perfection, investor connections, and financial planning.",
      features: ["Pitch preparation", "Investor connections", "Financial planning", "Grant opportunities"]
    },
    {
      icon: <Home size={32} />,
      title: "Co-working & Infrastructure",
      description: "Access world-class infrastructure including office space, meeting rooms, and high-speed internet.",
      features: ["Office space", "Meeting rooms", "High-speed internet", "Networking events"]
    },
    {
      icon: <BookOpen size={32} />,
      title: "Training & Skill Development",
      description: "Enhance your skills through workshops, training programs, and certification courses.",
      features: ["Workshops", "Training programs", "Certifications", "Skill development"]
    }
  ];

  // Support Areas
  const supportAreas = [
    "Business Model Development",
    "Financial Management",
    "Marketing & Branding",
    "Sales & Growth Strategy",
    "Team Building & HR",
    "Technology & Innovation",
    "Customer Development",
    "Scaling & Operations"
  ];

  // Service Process
  const serviceProcess = [
    { step: 1, title: "Consultation", description: "Initial assessment of your needs and goals" },
    { step: 2, title: "Planning", description: "Customized roadmap and action plan" },
    { step: 3, title: "Execution", description: "Hands-on support and guidance" },
    { step: 4, title: "Review & Iterate", description: "Regular monitoring and adjustments" }
  ];

  // Incubated Startups
  const incubatedStartups = [
    { name: "Future EV Technology", description: "Next-generation electric vehicle solutions" },
    { name: "Lead AI", description: "Artificial intelligence and machine learning applications" },
    { name: "Bigwig Social", description: "Social commerce and digital platforms" },
    { name: "Crafton Global LLP", description: "Innovative global business solutions" }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-content">
          <h1 className="services-hero-title">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="services-hero-subtitle">
            Comprehensive support for your entrepreneurial journey
          </p>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-section-title">Core Services</h2>
          <p className="services-intro">
            GGGIC provides a comprehensive range of services designed to support entrepreneurs at every stage of their journey.
          </p>
          
          <div className="services-grid">
            {mainServices.map((service, index) => (
              <div 
                key={index} 
                className={`service-card ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="service-card-icon">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-card-desc">{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-badge">
                      <Check size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Areas Section */}
      <section className="services-section alt-bg">
        <div className="services-container">
          <h2 className="services-section-title">Support Areas</h2>
          <p className="services-intro">
            Beyond core services, we provide specialized support across multiple domains
          </p>
          
          <div className="support-grid">
            {supportAreas.map((area, index) => (
              <div key={index} className="support-card">
                <div className="support-card-icon">
                  <Zap size={20} />
                </div>
                <h3 className="support-card-title">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-section-title">How We Work</h2>
          <p className="services-intro">
            Our structured approach ensures you get the support you need at every stage
          </p>
          
          <div className="process-timeline">
            {serviceProcess.map((item, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
                <p className="step-description">{item.description}</p>
                {index < serviceProcess.length - 1 && (
                  <div className="step-connector">
                    <ArrowRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="services-section alt-bg">
        <div className="services-container">
          <h2 className="services-section-title">Why Our Services Matter</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-number">1</div>
              <h3 className="benefit-title">Accelerated Growth</h3>
              <p className="benefit-text">
                Access proven frameworks and expertise to accelerate your startup's growth trajectory.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">2</div>
              <h3 className="benefit-title">Risk Reduction</h3>
              <p className="benefit-text">
                Mitigate risks through expert guidance, market validation, and structured planning.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">3</div>
              <h3 className="benefit-title">Network Access</h3>
              <p className="benefit-text">
                Connect with investors, mentors, industry experts, and fellow entrepreneurs.
              </p>
            </div>
            <div className="benefit-card">
              <div className="benefit-number">4</div>
              <h3 className="benefit-title">Resource Availability</h3>
              <p className="benefit-text">
                Access infrastructure, tools, and resources needed to build and scale your venture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Startups We Support Section */}
      <section className="services-section">
        <div className="services-container">
          <h2 className="services-section-title">Startups We Support</h2>
          <p className="services-intro">
            Meet some of the innovative startups currently in our incubation program
          </p>
          
          <div className="startups-grid">
            {incubatedStartups.map((startup, index) => (
              <div key={index} className="startup-card">
                <div className="startup-badge">{index + 1}</div>
                <h3 className="startup-name">{startup.name}</h3>
                <p className="startup-description">{startup.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="services-container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Access Our Services?</h2>
            <p className="cta-description">
              Take the first step towards building your startup. Apply now to GGGIC and unlock comprehensive support.
            </p>
            <button className="cta-button">Apply Now</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
