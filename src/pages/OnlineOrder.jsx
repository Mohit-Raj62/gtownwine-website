import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const OnlineOrder = () => {
  const phoneNumber = "916262362558"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Hi, I would like to place an order.");

  return (
    <div className="container section-padding" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Helmet>
        <title>Order Online | G-Town Wines</title>
        <meta name="description" content="Place your order online via WhatsApp or Phone call. Quick, easy, and convenient delivery options from G-Town Wines." />
        <meta name="keywords" content="Order Alcohol Online Gurgaon, Liquor Delivery Delhi, WhatsApp Liquor Order NCR, Phone Order Alcohol Noida, Home Delivery Wine Gurgaon, Beer Delivery Near Me, 24/7 Liquor Delivery, Late Night Alcohol Delivery Delhi, Buy Booze Online NCR, Fast Liquor Delivery, Imported Liquor Home Delivery, Whisky Delivery Gurgaon" />
        <meta property="og:title" content="Order Online | G-Town Wines" />
        <meta property="og:description" content="Quick and easy liquor ordering via WhatsApp or Phone. Connect with G-Town Wines now." />
      </Helmet>
      <h2 style={{ marginBottom: '40px', fontSize: '2.5rem' }}>Order Online</h2>
      <p style={{ marginBottom: '50px', fontSize: '1.2rem', color: 'var(--color-text-light)', textAlign: 'center', maxWidth: '600px' }}>
        We offer quick and easy ordering via Phone or WhatsApp. Click below to connect with us instantly.
      </p>

      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        
        {/* Call Option */}
        <a href={`tel:+${phoneNumber}`} style={{ textDecoration: 'none' }}>
          <div className="contact-card" style={{
            border: '2px solid var(--color-primary)',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center',
            width: '280px',
            transition: '0.3s',
            cursor: 'pointer',
            backgroundColor: 'var(--color-white)'
          }}>
            <div style={{ 
              width: '80px', height: '80px', 
              background: 'var(--color-primary)', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <Phone size={40} color="var(--color-accent)" />
            </div>
            <h3 style={{ marginBottom: '10px' }}>Call Us</h3>
            <p style={{ color: 'var(--color-text-light)' }}>Speak directly to our store manager.</p>
          </div>
        </a>

        {/* WhatsApp Option */}
        <a href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <div className="contact-card" style={{
            border: '2px solid #25D366',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center',
            width: '280px',
            transition: '0.3s',
            cursor: 'pointer',
            backgroundColor: 'var(--color-white)'
          }}>
             <div style={{ 
              width: '80px', height: '80px', 
              background: '#25D366', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 20px auto'
            }}>
              <MessageCircle size={40} color="#fff" />
            </div>
            <h3 style={{ marginBottom: '10px', color: '#075E54' }}>WhatsApp</h3>
            <p style={{ color: 'var(--color-text-light)' }}>Chat with us to place your order.</p>
          </div>
        </a>
      </div>

      <style>{`
        .contact-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }
      `}</style>
    </div>
  );
};

export default OnlineOrder;
