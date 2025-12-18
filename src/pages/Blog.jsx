import React from 'react';
import { Calendar, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const blogs = [
  {
    id: 1,
    title: "The Art of Wine Tasting",
    excerpt: "Learn the basics of wine tasting and how to appreciate the subtle notes in your glass.",
    date: "Dec 12, 2024",
    author: "Sommelier Jane",
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Pairing White Wine with Food",
    excerpt: "A comprehensive guide to pairing your favorite white wines with delicious meals.",
    date: "Dec 05, 2024",
    author: "Chef G-Town",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Why Authenticity Matters",
    excerpt: "Understanding the importance of buying authentic liquor from trusted sources.",
    date: "Nov 28, 2024",
    author: "Team G-Town",
    image: "https://images.unsplash.com/photo-1524310344778-984429e7102e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Sustainability in the Alcohol Industry",
    excerpt: "Exploring the growing trend of eco-friendly practices and sustainable production in the world of spirits.",
    date: "Feb 14, 2023",
    author: "gtownwines8282@gmail.com",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Gtown’s Exclusive Selections",
    excerpt: "Discover what’s hot in our stores right now! From limited editions to customer favorites.",
    date: "Feb 14, 2023",
    author: "gtownwines8282@gmail.com",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "North India’s Favorite Beverages",
    excerpt: "A regional breakdown of the most loved alcoholic beverages across North India.",
    date: "Feb 14, 2023",
    author: "gtownwines8282@gmail.com",
    image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&w=800&q=80"
  }
];

const Blog = () => {
  return (
    <section className="section-padding">
      <Helmet>
        <title>Blog | G-Town Wines</title>
        <meta name="description" content="Read the latest updates, wine tasting tips, and stories from the world of premium spirits on the G-Town Wines blog." />
      </Helmet>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Our Blog</h1>
          <p style={{ color: 'var(--color-text-light)' }}>Read the latest stories, tips, and news from the world of wines.</p>
        </div>

        <div className="blog-grid">
          {blogs.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image" style={{backgroundImage: `url(${post.image})`}}></div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span><Calendar size={14} /> {post.date}</span>
                  <span><User size={14} /> {post.author}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="read-more">Read More &rarr;</div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }
        .blog-card {
          background: white;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 5px 20px rgba(0,0,0,0.05);
          transition: 0.3s;
          cursor: pointer;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }
        .blog-image {
          height: 200px;
          background-size: cover;
          background-position: center;
        }
        .blog-content {
          padding: 25px;
        }
        .blog-meta {
          display: flex;
          gap: 15px;
          color: #999;
          font-size: 0.85rem;
          margin-bottom: 15px;
        }
        .blog-meta span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .blog-title {
          font-size: 1.3rem;
          margin-bottom: 10px;
          transition: 0.3s;
        }
        .blog-card:hover .blog-title {
          color: var(--color-primary);
        }
        .blog-excerpt {
          color: var(--color-text-light);
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .read-more {
          color: var(--color-primary);
          font-weight: 600;
          font-family: var(--font-heading);
        }
      `}</style>
    </section>
  );
};

export default Blog;
