import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#1a0505', color: 'var(--color-white)', paddingTop: '60px' }}>
      <div className="container" style={{ paddingBottom: '40px' }}>
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-col">
            <h3 style={{ color: 'var(--color-accent)', marginBottom: '20px' }}>G-Town Wines</h3>
            <p style={{ color: '#ccc', marginBottom: '20px', maxWidth: '300px' }}>
              NCR's 1st Women-Friendly Liquor Store. Providing an exclusive collection with authenticity and safety.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '15px' }}>
              <a href="#" className="social-icon"><Facebook size={20} /></a>
              <a href="#" className="social-icon"><Instagram size={20} /></a>
              <a href="#" className="social-icon"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--color-white)', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/" className="footer-link">Home</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/about" className="footer-link">About Us</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/wines" className="footer-link">Our Collection</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/online-order" className="footer-link">Online Order</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--color-white)', marginBottom: '20px' }}>Contact Us</h4>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'flex-start' }}>
              <MapPin size={18} color="var(--color-accent)" style={{ marginTop: '4px' }} />
              <p style={{ color: '#ccc' }}>Near A Block, adjacent to Bristol Hotel, Sector 28, DLF Phase 1, Gurugram, Haryana 122022</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'center' }}>
              <Phone size={18} color="var(--color-accent)" />
              <p style={{ color: '#ccc' }}>+91 62623-62558</p>
            </div>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', alignItems: 'center' }}>
              <Mail size={18} color="var(--color-accent)" />
              <p style={{ color: '#ccc' }}>info@gtownwines.com</p>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-col">
            <h4 style={{ color: 'var(--color-white)', marginBottom: '20px' }}>Opening Hours</h4>
            <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
              <Clock size={18} color="var(--color-accent)" />
              <div>
                <p style={{ color: '#fff', fontWeight: 'bold' }}>24/7 Open</p>
                <p style={{ color: '#ccc' }}>Free Home Delivery Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div style={{ borderTop: '1px solid #331515', padding: '20px 0', textAlign: 'center' }}>
        <p style={{ color: '#888', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} G-Town Wines. All rights reserved.
        </p>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
        }
        .footer-link {
          color: #ccc;
          transition: 0.3s;
        }
        .footer-link:hover {
          color: var(--color-accent);
          padding-left: 5px;
        }
        .social-icon {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #331515;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: 0.3s;
        }
        .social-icon:hover {
          background: var(--color-accent);
          color: var(--color-primary);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
