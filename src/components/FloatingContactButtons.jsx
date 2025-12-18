import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingContactButtons = () => {
  const phoneNumber = "916262362558";
  const whatsappMessage = encodeURIComponent("Hi, I would like to place an order.");

  return (
    <>
      {/* Call Button - Bottom Left */}
      <a 
        href={`tel:+${phoneNumber}`} 
        className="floating-btn call-btn"
        aria-label="Call Now"
      >
        <Phone size={24} fill="white" />
      </a>

      {/* WhatsApp Button - Bottom Right */}
      <a 
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} color="white" />
      </a>

      <style>{`
        .floating-btn {
          position: fixed;
          bottom: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.3);
          z-index: 9999;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          color: white;
        }
        .floating-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0,0,0,0.4);
        }
        .call-btn {
          left: 30px;
          background-color: var(--color-primary); /* Uses theme primary color or fallback to blue */
          border: 2px solid white;
        }
        .whatsapp-btn {
          right: 30px;
          background-color: #25D366;
          border: 2px solid white;
        }

        /* Responsive adjustments for mobile so they don't block content too much */
        @media (max-width: 768px) {
          .floating-btn {
            width: 50px;
            height: 50px;
            bottom: 20px;
          }
          .call-btn {
            left: 20px;
          }
          .whatsapp-btn {
            right: 20px;
          }
        }
      `}</style>
    </>
  );
};

export default FloatingContactButtons;
