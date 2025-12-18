import React from 'react';
import { Award, Users, Smile, Heart, Star, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | G-Town Wines</title>
        <meta name="description" content="Learn about G-Town Wines, our story, craftsmanship, and vision to provide a safe, premium, and women-friendly liquor buying experience in NCR." />
        <meta name="keywords" content="About G-Town Wines, Best Liquor Store NCR, Authentic Alcohol Shop Delhi, Women Friendly Wine Shop Gurgaon, Premium Liquor History, Trusted Alcohol Dealer India" />
      </Helmet>
      <section className="section-padding" style={{ backgroundColor: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>About G-Town Wines</h1>
            <div style={{ width: '80px', height: '4px', background: 'var(--color-primary)', margin: '0 auto' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
            
            {/* Story Section */}
            <div className="flex-center about-section" style={{ gap: '50px', flexWrap: 'wrap', textAlign: 'left' }}>
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=1000&q=80" 
                    alt="Our Story" 
                    style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
               </div>
               <div style={{ flex: 1, minWidth: '300px' }}>
                 <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Stories</span>
                 <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Our Story</h2>
                 <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                   Founded in 2005, G-Town Wines has been a pioneer in crafting exceptional spirits that blend tradition with innovation. From our humble beginnings in Delhi to becoming a globally recognized brand, our journey has been fueled by passion, craftsmanship, and an unwavering commitment to quality.
                 </p>
                 <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                   With decades of expertise in distillation, we have perfected the art of creating premium liquors that celebrate both heritage and modern refinement.
                 </p>
               </div>
            </div>

            {/* Vision Section */}
            <div className="flex-center about-section-reverse" style={{ gap: '50px', flexWrap: 'wrap-reverse', textAlign: 'left' }}>
               <div style={{ flex: 1, minWidth: '300px' }}>
                 <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Our Future</span>
                 <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Our Vision</h2>
                 <p style={{ marginBottom: '30px', fontSize: '1.2rem', fontStyle: 'italic', fontWeight: '500' }}>
                   "To be a globally admired liquor brand, renowned for our premium craftsmanship, sustainable practices, and innovative flavors that create memorable experiences for our consumers."
                 </p>
                 <Link to="/online-order" className="btn-primary">Order Online</Link>
               </div>
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Our Vision" 
                    style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
               </div>
            </div>

             {/* Craftsmanship Section */}
             <div className="flex-center about-section" style={{ gap: '50px', flexWrap: 'wrap', textAlign: 'left' }}>
               <div style={{ flex: 1, minWidth: '300px' }}>
                  <img 
                    src="https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Craftsmanship" 
                    style={{ width: '100%', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                  />
               </div>
               <div style={{ flex: 1, minWidth: '300px' }}>
                 <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Excellence</span>
                 <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Our Craftsmanship</h2>
                 <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                   At G-Town Wines, every bottle we produce tells a story of dedication and excellence. We source the finest ingredients, use time-honored techniques, and combine them with cutting-edge innovations to create spirits that stand out in every sip.
                 </p>
                 <p style={{ marginBottom: '30px', fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                   Whether it’s our signature whiskey, smooth vodka, rich rum, or sophisticated gin, each product reflects our passion for perfection.
                 </p>
                 <Link to="/contact" className="btn-outline">Book Now</Link>
               </div>
            </div>

            {/* Quality/Values Section */}
            <div style={{ backgroundColor: 'white', padding: '60px', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
              <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto 50px auto' }}>
                <h2 style={{ marginBottom: '20px', fontSize: '2.5rem' }}>Quality is our top priority</h2>
                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                  A responsible businessman drives sustainable growth by investing in education, environmental initiatives, and community welfare. Ethical practices and social engagement foster trust, long-term success, and a legacy of integrity.
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
                <div className="value-card">
                  <Award size={40} className="text-accent" style={{ marginBottom: '15px' }} />
                  <h3>Authenticity</h3>
                  <p>Every bottle is 100% authentic, sourced directly from trusted distributors.</p>
                </div>
                <div className="value-card">
                  <ShieldCheck size={40} className="text-accent" style={{ marginBottom: '15px' }} />
                  <h3>Integrity</h3>
                  <p>We believe in ethical practices and fostering trust with our community.</p>
                </div>
                <div className="value-card">
                  <Heart size={40} className="text-accent" style={{ marginBottom: '15px' }} />
                  <h3>Passion</h3>
                  <p>Our journey is fueled by a deep passion for the art of winemaking.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
        <style>{`
          .value-card {
             padding: 30px;
             text-align: center;
             transition: 0.3s;
          }
          .value-card:hover {
            transform: translateY(-5px);
          }
        `}</style>
      </section>
    </>
  );
};

export default About;
