import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
  return (
    <section className="section-padding">
      <Helmet>
        <title>Contact Us | G-Town Wines</title>
        <meta name="description" content="Get in touch with G-Town Wines. Visit our store in Dwarka, New Delhi, or contact us via phone or email for any queries." />
        <meta name="keywords" content="G-Town Wines Location, Liquor Store Address Gurgaon, Contact Wine Shop Delhi, Alcohol Delivery Number NCR, Liquor Store Phone Number, Wine Shop Near DLF Phase 1, Gurgaon Liquor Shop Contact" />
      </Helmet>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Contact Us</h1>
          <p style={{ color: 'var(--color-text-light)' }}>We'd love to hear from you. Reach out to us for any queries.</p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2 style={{ marginBottom: '30px' }}>Get In Touch</h2>
            <div className="info-item">
              <div className="icon-circle"><MapPin size={24} /></div>
              <div>
                <h4>Visit Us</h4>
                <p>Near A Block, adjacent to Bristol Hotel, Sector 28, DLF Phase 1, Gurugram, Haryana 122022</p>
              </div>
            </div>
            <div className="info-item">
               <div className="icon-circle"><Phone size={24} /></div>
               <div>
                 <h4>Call Us</h4>
                 <p>+91 6262362558</p>
               </div>
            </div>
            <div className="info-item">
               <div className="icon-circle"><Mail size={24} /></div>
               <div>
                 <h4>Email Us</h4>
                 <p>info@gtownwines.com</p>
               </div>
            </div>
            <div className="info-item">
               <div className="icon-circle"><Clock size={24} /></div>
               <div>
                 <h4>Opening Hours</h4>
                 <p>Mon - Sun: 10:00 AM - 12:00 AM</p>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container">
            <h2 style={{ marginBottom: '30px' }}>Send a Message via WhatsApp</h2>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const message = formData.get('message');
              
              const phone = "916262362558";
              const text = `*New Contact Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
              
              window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
            }}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '500' }}>Name</label>
                <input name="name" type="text" placeholder="Your Name" className="form-input" required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '500' }}>Email</label>
                <input name="email" type="email" placeholder="Your Email" className="form-input" required />
              </div>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: '500' }}>Message</label>
                <textarea name="message" rows="5" placeholder="Your Message" className="form-input" required></textarea>
              </div>
              <button className="btn-primary" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
                Send Message on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 60px;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 30px;
        }
        .icon-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #fcf1f1;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .contact-form-container {
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.05);
        }
        .form-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 1rem;
          transition: 0.3s;
        }
        .form-input:focus {
          border-color: var(--color-primary);
          outline: none;
        }
      `}</style>
    </section>
  );
};

export default Contact;
