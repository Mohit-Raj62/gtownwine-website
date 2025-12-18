import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Wine, Phone, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleOrderClick = () => {
    navigate("/online-order");
    setIsOpen(false);
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "var(--color-white)",
        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div className="container flex-between" style={{ padding: "15px 20px" }}>
        {/* Logo */}
        <Link
          to="/"
          className="logo-container flex-center"
          style={{ gap: "10px" }}
        >
          <Wine size={32} color="var(--color-primary)" />
          <div>
            <h1 style={{ fontSize: "1.5rem", margin: 0 }}>G-Town Wines</h1>
            <p
              style={{
                fontSize: "0.7rem",
                color: "var(--color-secondary)",
                letterSpacing: "1px",
              }}
            >
              NCR'S 1ST WOMEN-FRIENDLY
            </p>
          </div>
        </Link>

        {/* Desktop Links */}
        <div
          className="desktop-menu"
          style={{ display: "none", gap: "30px", alignItems: "center" }}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/wines" className="nav-link">
            Wines
          </Link>
          <Link to="/blog" className="nav-link">
            Blog
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <button
            onClick={handleOrderClick}
            className="btn-primary flex-center"
            style={{ gap: "8px", fontWeight: "bold" }}
          >
            24/7 Free Home Delivery
          </button>
        </div>

        {/* Mobile Toggle */}
        <div
          className="mobile-toggle"
          onClick={toggleMenu}
          style={{ cursor: "pointer" }}
        >
          {isOpen ? (
            <X size={28} color="var(--color-primary)" />
          ) : (
            <Menu size={28} color="var(--color-primary)" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="mobile-menu"
          style={{
            backgroundColor: "var(--color-white)",
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 999,
          }}
        >
          <Link to="/" onClick={toggleMenu} style={{ fontSize: "1.1rem" }}>
            Home
          </Link>
          <Link to="/about" onClick={toggleMenu} style={{ fontSize: "1.1rem" }}>
            About
          </Link>
          <Link to="/wines" onClick={toggleMenu} style={{ fontSize: "1.1rem" }}>
            Wines
          </Link>
          <Link to="/blog" onClick={toggleMenu} style={{ fontSize: "1.1rem" }}>
            Blog
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            style={{ fontSize: "1.1rem" }}
          >
            Contact
          </Link>
          <button
            onClick={handleOrderClick}
            className="btn-primary"
            style={{ width: "100%", fontWeight: "bold" }}
          >
            24/7 Free Home Delivery
          </button>
        </div>
      )}

      {/* Responsive Styles Injection */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link {
          font-weight: 500;
          color: var(--color-text-main);
          position: relative;
        }
        .nav-link:hover {
          color: var(--color-primary);
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: var(--color-accent);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
