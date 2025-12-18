import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingContactButtons from './FloatingContactButtons';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
        {children}
      </main>
      <FloatingContactButtons />
      <Footer />
    </div>
  );
};

export default Layout;
