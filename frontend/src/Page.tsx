import React from 'react';
import { PageTitle } from './PageTitle';
interface PageProps {
  title?: React.ReactNode;
  children: React.ReactNode;
}
export const Page = ({ title, children }: PageProps) => {
  return (
    <div>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </div>
  );
};
