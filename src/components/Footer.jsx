import React from 'react';
import './Footer.css';

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2s-.2-1.7-.8-2.5c-.8-.9-1.8-.9-2.2-1C16.7 2 12 2 12 2s-4.7 0-8.5.7c-.4 0-1.4 0-2.2 1-.7.8-.8 2.5-.8 2.5S0 8 0 9.8v2.5C0 14 0 15.6.5 16.8c.8.9 1.9.9 2.4 1 1.7.2 7.1.6 8.6.6s6.8-.4 8.6-.6c.4 0 1.5 0 2.3-1 .6-1.2.8-2.8.8-2.8V9.8c0-1.8-.5-3.6-.5-3.6z" />
    <path d="M9.5 15.5v-7l6 3.5-6 3.5z" fill="#fff" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5C3.43 3.5 2.16 4.75 2.16 6.3c0 1.55 1.27 2.8 2.82 2.8h.02c1.54 0 2.81-1.25 2.81-2.8C7.83 4.75 6.56 3.5 5.02 3.5h-.04zM3 20.5h3.96V8.5H3V20.5zM8.14 8.5v12H12V14.3c0-2 .7-3.4 2.48-3.4 1.78 0 1.8 1.7 1.8 3.5v6.1H20V13c0-4-2.14-5.8-5-5.8-2.28 0-3.29 1.3-3.85 2.2h-.05V8.5H8.14z" />
  </svg>
);

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23 4.8c-.8.3-1.6.5-2.5.6.9-.5 1.5-1.4 1.8-2.4-.9.5-2 .9-3.1 1.1-.9-.9-2.2-1.4-3.6-1.4-2.7 0-4.8 2.2-4.8 4.8 0 .4 0 .8.1 1.2-4-.2-7.6-2.1-10-5-.4.8-.6 1.7-.6 2.7 0 1.7.9 3.2 2.2 4.1-.8 0-1.5-.2-2.2-.6v.1c0 2.6 1.9 4.8 4.4 5.3-.5.2-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.5 3.2 4.3 6 4.4-2.2 1.7-4.9 2.7-7.9 2.7-.5 0-1 0-1.5-.1C2.9 21.1 6.4 22 10.2 22c12.3 0 19-10.2 19-19 0-.3 0-.7 0-1 .3-.2.7-.6 1-1z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.2c-2.6 0-4.8 2.2-4.8 4.8S9.4 16.8 12 16.8 16.8 14.6 16.8 12 14.6 7.2 12 7.2zm0 2.4c1.3 0 2.4 1.1 2.4 2.4S13.3 14.4 12 14.4 9.6 13.3 9.6 12 10.7 9.6 12 9.6zm4.8-.9c.3 0 .6.2.6.6 0 .3-.2.6-.6.6-.3 0-.6-.2-.6-.6 0-.3.2-.6.6-.6z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.5 9.9v-7h-2.5V12H10.5V9.8c0-2.4 1.4-3.7 3.6-3.7 1 .1 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2V21.9C18.3 21.1 22 17 22 12z" />
  </svg>
);

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3 className="footer-title">GGGIC</h3>
          <p className="footer-text">
            Tilwara Ghat road, Near Bargi Hills,
            <br /> Jabalpur (M.P) 482003
          </p>
          <div className="footer-social">
            <a href="https://www.youtube.com/@GyanGangaGroup/featured" target="_blank" rel="noreferrer" aria-label="YouTube">
              <YoutubeIcon />
            </a>
            <a href="https://www.linkedin.com/school/gyan-ganga-institute-of-technology-sciences/posts/?feedView=all" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <LinkedinIcon />
            </a>
            <a href="https://x.com/gangagroupofins" target="_blank" rel="noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://www.instagram.com/gyanganga_official" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/gyangangaofficial" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
          </div>
        </div>

        <div className="footer-map-wrapper">
          <h4 className="footer-map-title">Our Location</h4>
          <div className="footer-map">
            <iframe
              title="GGGIC Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.123891079277!2d79.87025407271766!3d23.129146366171835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981b3caccc2274b%3A0xc066b027d5fb1488!2sGyan%20Ganga%20Institute%20of%20Technology%20%26%20Sciences%20(GGITS)%20-%20Best%20Engineering%20College%20in%20Jabalpur!5e0!3m2!1sen!2sus!4v1783325859574!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <button type="button" className="back-to-top-btn" onClick={scrollToTop}>
          Back to Top
        </button>
        <p>© {new Date().getFullYear()} GGGIC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
