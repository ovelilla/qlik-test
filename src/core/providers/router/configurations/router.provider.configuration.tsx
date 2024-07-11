// Vendors
import { createBrowserRouter } from 'react-router-dom';
// Layouts
import { AppLayout } from 'core/layouts/app/app.layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        async lazy() {
          const { GlobalViewPage } = await import('features/global-view/global-view.page');
          return { Component: GlobalViewPage };
        },
      },
    ],
  },
]);

export { router };
