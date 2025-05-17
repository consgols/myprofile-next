import React from 'react';

type PropsType = {
  children: React.ReactNode;
};

const PageLayout = ({ children }: Readonly<PropsType>) => {
  return <div className="mt-10 mx-auto max-w-3/4">{children}</div>;
};

export default PageLayout;
