import React from 'react';
import PortfolioDisclaimer from '../components/common/PortfolioDisclaimer';
import OpticalNavbar from '../components/navigation/OpticalNavbar';
import OpticalFooter from '../components/footer/OpticalFooter';
import WhatsAppButton from '../components/common/WhatsAppButton';
import ScrollToTop from '../components/common/ScrollToTop';

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-pearl text-ink-deep font-body overflow-x-hidden">
      <ScrollToTop />
      <PortfolioDisclaimer />
      <OpticalNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <OpticalFooter />
      <WhatsAppButton />
    </div>
  );
};

export default MainLayout;
