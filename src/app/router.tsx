import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { RouteWrapper } from './routes/route-wrapper';

export const createAppRouter = () =>
  createBrowserRouter([
    {
      path: '/',
      lazy: async () => {
        const { LandingRoute } = await import('./routes/landing');
        return {
          Component: () => (
            <RouteWrapper>
              <LandingRoute />
            </RouteWrapper>
          ),
        };
      },
    },
    {
      path: '*',
      lazy: async () => {
        const { NotFoundRoute } = await import('./routes/not-found');
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const router = createAppRouter();

  return <RouterProvider router={router} />;
};
