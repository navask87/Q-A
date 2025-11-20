import React from 'react';

interface PageTitleProps {
  children: React.ReactNode;
}
export const PageTitle = ({ children }: PageTitleProps) => {
  return <div>{children}</div>;
};
