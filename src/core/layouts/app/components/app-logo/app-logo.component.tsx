// Vendors
import React from 'react';
// Constants
import { IMG_PROPS, LOGO_TEXT } from './constants/app-logo.component.constants';
// Styles
import {
  AppLogoComponentStyled,
  AppLogoComponentTextStyled,
} from './styles/app-logo.component.styled';

const AppLogoComponent = (): React.ReactElement => (
  <AppLogoComponentStyled>
    <img {...IMG_PROPS} />
    <AppLogoComponentTextStyled>{LOGO_TEXT}</AppLogoComponentTextStyled>
  </AppLogoComponentStyled>
);

export { AppLogoComponent };
