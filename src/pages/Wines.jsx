import React from 'react';
import { Helmet } from 'react-helmet-async';

const wines = [
  { id: 1, name: "Cabernet Sauvignon", type: "Red Wine", image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Sauvignon Blanc", type: "White Wine", image: "https://images.unsplash.com/photo-1572569970950-8bbed7c53e0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Moët & Chandon", type: "Champagne", image: "https://images.unsplash.com/photo-1598155523122-38423ab4d6ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Merlot Reserve", type: "Red Wine", image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Chardonnay", type: "White Wine", image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" },
  { id: 6, name: "Rosé Imperial", type: "Rosé", image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" }, // Reusing image with filter in css if needed, but keeping simple for now
];

const Wines = () => {
  return (
    <section className="section-padding">
      <Helmet>
        <title>Our Collection | G-Town Wines</title>
        <meta name="description" content="Explore our exclusive collection of premium wines, whiskies, and spirits. Authentic brands at irresistible prices." />
        <meta name="keywords" content="Buy Wine Gurgaon, Red Wine Price Delhi, Champagne Delivery NCR, Single Malt Whisky Shop, Imported Beer Brands India, Chivas Regal Price, Jack Daniels Gurgaon, Glenfiddich Delhi, Absolut Vodka Price, Grey Goose Vodka, Bombay Sapphire Gin, Baileys Irish Cream, Best Wine Collection NCR" />
      </Helmet>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Our Collection</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Discover our exclusive range of premium wines and spirits.</p>
        </div>

        <div className="wines-grid">
          {wines.map((wine) => (
            <div key={wine.id} className="wine-card">
              <div className="wine-image" style={{ 
                backgroundImage: `url(${wine.image})`,
                height: '300px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}>
                <div className="overlay">
                  <button className="btn-primary" onClick={() => window.location.href='/online-order'}>Order Now</button>
                </div>
              </div>
              <div className="wine-info" style={{ padding: '20px' }}>
                <span style={{ color: 'var(--color-accent)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '1px' }}>{wine.type}</span>
                <h3 style={{ margin: '10px 0', fontSize: '1.4rem' }}>{wine.name}</h3>
                <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--color-primary)' }}>{wine.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .wines-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
        }
        .wine-card {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          background: white;
          transition: 0.3s;
        }
        .wine-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.15);
        }
        .wine-image {
          position: relative;
        }
        .overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(74, 4, 4, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s;
        }
        .wine-card:hover .overlay {
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Wines;
