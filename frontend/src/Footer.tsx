import React from 'react';
interface Footerprops {
  children: React.ReactNode;
  renderContentAboveFooter: () => React.ReactNode;
}
export const Footer = ({ children, renderContentAboveFooter }: Footerprops) => {
  return (
    <div>
      {renderContentAboveFooter()} <p>{children}</p>
    </div>
  );
};
