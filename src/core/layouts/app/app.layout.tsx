// Vendors
import React from 'react';
import { Outlet } from 'react-router-dom';
// Components
import { AppLogoComponent } from './components/app-logo/app-logo.component';
// Styles
import {
  AppLayoutStyled,
  AppLayoutHeaderStyled,
  AppLayoutMainStyled,
  AppLayoutFooterStyled,
} from './styles/app.layout.styled';

const AppLayout = (): React.ReactElement => (
  <AppLayoutStyled>
    <AppLayoutHeaderStyled>
      <AppLogoComponent />
    </AppLayoutHeaderStyled>
    <AppLayoutMainStyled>
      <Outlet />
    </AppLayoutMainStyled>
    <AppLayoutFooterStyled></AppLayoutFooterStyled>
  </AppLayoutStyled>
);

export { AppLayout };
