import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Star, ShieldCheck, Heart } from 'lucide-react';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home | G-Town Wines - NCR's 1st Women-Friendly Liquor Store</title>
        <meta name="description" content="Welcome to G-Town Wines, NCR's first women-friendly liquor store offering an exclusive collection of authenticated premium brands at wholesale prices." />
        <meta name="keywords" content="Liquor Store Gurgaon, Wine Shop Delhi, Alcohol Delivery NCR, Buy Liquor Online, Best Liquor Store Near Me, Women Friendly Liquor Shop, Premium Whisky Price, Imported Wine Gurgaon, Beer Shop Delhi, Vodka Delivery Noida, Gin Store NCR, Authentic Liquor Shop, 24/7 Alcohol Delivery, Home Delivery Liquor Gurgaon, Late Night Liquor Store, Original Alcohol Dealer, Wholesale Liquor Prices, Wedding Alcohol Order, Party Liquor Delivery, Single Malt Whisky India, Champagne Price Delhi" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gtownwines.com/" />
        <meta property="og:title" content="G-Town Wines - NCR's 1st Women-Friendly Liquor Store" />
        <meta property="og:description" content="Experience authenticity and safety. Shop premium liquor brands at wholesale prices at G-Town Wines." />
        <meta property="og:image" content="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://gtownwines.com/" />
        <meta property="twitter:title" content="G-Town Wines - NCR's 1st Women-Friendly Liquor Store" />
        <meta property="twitter:description" content="Experience authenticity and safety. Shop premium liquor brands at wholesale prices at G-Town Wines." />
        <meta property="twitter:image" content="https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" />
      </Helmet>
      {/* Hero Section */}
      <section className="hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container animate-fade-in">
          <span style={{ 
            display: 'inline-block', 
            padding: '8px 16px', 
            border: '1px solid var(--color-accent)', 
            borderRadius: '50px',
            color: 'var(--color-accent)',
            marginBottom: '20px',
            letterSpacing: '2px',
            fontSize: '0.9rem'
          }}>
            NCR'S 1ST WOMEN-FRIENDLY LIQUOR STORE
          </span>
          <h1 style={{ 
            fontSize: 'clamp(3rem, 5vw, 5rem)', 
            marginBottom: '20px',
            color: 'var(--color-white)',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Welcome to <br/> <span style={{ color: 'var(--color-accent)' }}>G-Town Wines</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '40px', 
            maxWidth: '700px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            color: '#e0e0e0'
          }}>
            Exclusive collection & offering prices you can’t resist! Experience authenticity and safety in every bottle.
          </p>
          <div className="flex-center" style={{ gap: '20px', flexWrap: 'wrap' }}>
            <Link to="/wines" className="btn-primary">Browse Collection</Link>
            <Link to="/online-order" className="btn-outline" style={{ color: 'white', borderColor: 'white' }}>24/7 Free Home Delivery</Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1584225064785-c62a8b43d148?auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        <div className="container">
          <div className="flex-center" style={{ flexDirection: 'column', textAlign: 'center' }}>
            <span style={{ color: 'var(--color-accent)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold', marginBottom: '10px' }}>About Us</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: 'white', maxWidth: '900px' }}>Women-Friendly With Never Before Wholesale Prices</h2>
            <p style={{ maxWidth: '900px', fontSize: '1.2rem', color: '#ccc', marginBottom: '50px', lineHeight: '1.8' }}>
              We believe in our tag line <span style={{ color: 'var(--color-accent)', fontStyle: 'italic' }}>“Be Original, Buy Original”</span> and stand by it religiously. 
              Providing a comfortable shopping experience to women, and considering the dearth of liquor stores that offer special discounts to women, 
              G-Town Wines stands out as NCR’s first safest, women-friendly, authentic liquor shop, bringing niche brands at wholesale prices to town!
            </p>

            {/* Stats */}
            <div className="flex-center" style={{ gap: '50px', flexWrap: 'wrap', width: '100%', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: '5px' }}>25</h3>
                <p style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years In Business</p>
              </div>
              <div style={{ width: '2px', height: '80px', background: 'rgba(255,255,255,0.2)' }} className="hide-mobile"></div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: '5px' }}>2500+</h3>
                <p style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Brands</p>
              </div>
              <div style={{ width: '2px', height: '80px', background: 'rgba(255,255,255,0.2)' }} className="hide-mobile"></div>
              <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '3.5rem', color: 'var(--color-accent)', marginBottom: '5px' }}>450+</h3>
                <p style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Google Reviews</p>
              </div>
            </div>
            
            <style>{`
              @media (max-width: 768px) {
                .hide-mobile { display: none; }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* Premium Brands Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        overflow: 'hidden'
      }}>
        <div className="container text-center">
          <span style={{ color: 'var(--color-accent)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>Range of Choice</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '50px', marginTop: '10px', color: 'white' }}>Our Premium Brands</h2>
          
          <div className="marquee-container">
            <div className="marquee-track">
              {[
                'Chivas Regal', 'Johnnie Walker', 'Jack Daniel\'s', 'Moët & Chandon', 'Grey Goose', 'Glenfiddich', 'Absolut', 'Bombay Sapphire',
                'Chivas Regal', 'Johnnie Walker', 'Jack Daniel\'s', 'Moët & Chandon', 'Grey Goose', 'Glenfiddich', 'Absolut', 'Bombay Sapphire'
              ].map((brand, index) => (
                <div key={index} className="brand-card-marquee">
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: '1.4rem', 
                    color: 'white', 
                    fontFamily: 'var(--font-heading)',
                    fontStyle: 'italic',
                    whiteSpace: 'nowrap'
                  }}>
                    {brand}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          .marquee-container {
            width: 100%;
            overflow: hidden;
            position: relative;
          }
          .marquee-track {
            display: flex;
            gap: 40px;
            width: max-content;
            animation: scroll 20s linear infinite;
          }
          .brand-card-marquee {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(5px);
            border-radius: 50px;
            padding: 15px 40px;
            border: 1px solid rgba(255,255,255,0.1);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.3s;
          }
          .brand-card-marquee:hover {
            background: rgba(255,255,255,0.15);
            border-color: var(--color-accent);
            cursor: default;
          }
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* Online Orders Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        <div className="container">
          <div className="online-order-grid" style={{ display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <img 
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Online Order" 
                style={{ width: '100%', borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </div>
            <div style={{ flex: 1, minWidth: '300px' }}>
              <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>Convenience First</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', marginTop: '10px', color: 'white' }}>Online Orders</h2>
              <p style={{ marginBottom: '20px', fontSize: '1.1rem', color: '#ccc', lineHeight: '1.8' }}>
                G-Town Wines is a one stop shop for Indian as well as Imported liquor brands, from Whisky and Wines to Beer, 
                low cost and high-end brands and pints, coming at a price that will have you go nowhere else, 
                and the vision to provide the best wine lifestyle experience in the world, to support it.
              </p>
              <Link to="/online-order" className="btn-primary" style={{ display: 'inline-block' }}>Book Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div className="container">
          <span style={{ color: 'var(--color-accent)', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 'bold' }}>Customer Reviews</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '60px', marginTop: '10px', color: 'white' }}>Testimonials</h2>
          
          <div className="marquee-container">
            <div className="testimonial-track">
              {/* Original Reviews */}
              <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "G-Town Wines offers an exceptional selection of authentic liquor at great prices, making every celebration seamless and premium."
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Nick Simmons</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Kyma BYOB</p>
              </div>

              <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "G-Town Wines is the ultimate spot for authentic liquor at unbeatable prices, ensuring every BYOB gathering is stocked with the best!"
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Maria Livingston</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Backyard Sports Club</p>
              </div>

              <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "Finally a liquor store where I feel completely at ease. The 'Women-Friendly' commitment is real—safe, respectful, and stylish."
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Sarah Kapoor</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Local Guide</p>
              </div>

              <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "The collection here is unmatched. I found rare Japanese Whiskies that aren't available anywhere else in NCR. A true gem."
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Rahul Verma</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Whiskey Enthusiast</p>
              </div>

               {/* Duplicate for Infinite Scroll */}
               <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "G-Town Wines offers an exceptional selection of authentic liquor at great prices, making every celebration seamless and premium."
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Nick Simmons</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Kyma BYOB</p>
              </div>

              <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "G-Town Wines is the ultimate spot for authentic liquor at unbeatable prices, ensuring every BYOB gathering is stocked with the best!"
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Maria Livingston</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Backyard Sports Club</p>
              </div>

              <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "Finally a liquor store where I feel completely at ease. The 'Women-Friendly' commitment is real—safe, respectful, and stylish."
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Sarah Kapoor</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Local Guide</p>
              </div>

              <div className="testimonial-card-marquee">
                <div style={{ marginBottom: '20px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: '1.1rem', fontStyle: 'italic', marginBottom: '20px', lineHeight: '1.6' }}>
                  "The collection here is unmatched. I found rare Japanese Whiskies that aren't available anywhere else in NCR. A true gem."
                </p>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '5px' }}>Rahul Verma</h4>
                <p style={{ fontSize: '0.8rem', color: '#ccc' }}>~ Whiskey Enthusiast</p>
              </div>
          </div>
        </div>
      </div>
        <style>{`
          .testimonial-track {
             display: flex;
             gap: 40px;
             width: max-content;
             animation: scroll 30s linear infinite;
          }
          .testimonial-card-marquee {
             padding: 30px;
             border: 1px solid rgba(255,255,255,0.1);
             border-radius: 15px;
             background: rgba(255,255,255,0.05);
             backdrop-filter: blur(10px);
             min-width: 400px;
             max-width: 400px;
             text-align: left;
          }
          .testimonial-card-marquee:hover {
            background: rgba(255,255,255,0.1);
            border-color: var(--color-accent);
          }
        `}</style>
      </section>

      {/* Features Grid */}
      <section className="section-padding" style={{ 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("https://images.unsplash.com/photo-1597554559828-569658db4d88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        color: 'white'
      }}>
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-box"><ShieldCheck size={32} /></div>
              <h3 style={{ color: 'white' }}>Safe Environment</h3>
              <p style={{ color: '#ccc' }}>Designed to be women-friendly, safe, and comfortable for all shoppers.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Star size={32} /></div>
              <h3 style={{ color: 'white' }}>Exclusive Brands</h3>
              <p style={{ color: '#ccc' }}>Curated collection of premium wines and spirits you won't find easily.</p>
            </div>
            <div className="feature-card">
              <div className="icon-box"><Heart size={32} /></div>
              <h3 style={{ color: 'white' }}>Best Prices</h3>
              <p style={{ color: '#ccc' }}>Offering luxury at prices you simply can't resist. Stock up today!</p>
            </div>
          </div>
        </div>
        <style>{`
          .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
          }
          .feature-card {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 15px;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            border: 1px solid rgba(255,255,255,0.1);
          }
          .feature-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.3);
            border-color: var(--color-accent);
          }
          .icon-box {
            width: 70px;
            height: 70px;
            background: var(--color-primary);
            color: var(--color-accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px auto;
            border: 2px solid var(--color-accent);
          }
        `}</style>
      </section>
    </>
  );
};

export default Home;
