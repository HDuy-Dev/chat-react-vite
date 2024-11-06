import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { MainErrorFallback } from '@/components/errors/main';

type RouteWrapperProps = {
  children: React.ReactNode;
};

export const RouteWrapper = ({ children }: RouteWrapperProps) => {
  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      {children}
    </ErrorBoundary>
  );
};
