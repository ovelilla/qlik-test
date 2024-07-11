// Vendors
import React from 'react';
// Providers
import { QlikProvider } from 'core/providers/qlik/qlik.provider';
import { RouterProvider } from 'core/providers/router/router.provider';
import { ThemeProvider } from 'core/providers/theme/theme.provider';

const Entrypoint = (): React.ReactElement => {
  return (
    <ThemeProvider>
      <QlikProvider>
        <RouterProvider />
      </QlikProvider>
    </ThemeProvider>
  );
};

export { Entrypoint };
