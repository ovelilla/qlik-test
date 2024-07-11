// Vendors
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
// Constants
import { DEFAULT_THEME } from 'core/themes/default/default.theme';
// Styles
import { ThemeProviderStyled } from './styles/theme.provider.styled';
// Types
import { ThemeProviderPropsType } from './types/theme.provider.props.type';

const ThemeProvider = ({
  children,
}: ThemeProviderPropsType): React.ReactElement<ThemeProviderPropsType> => (
  <StyledThemeProvider {...{ theme: DEFAULT_THEME }}>
    <ThemeProviderStyled />
    {children}
  </StyledThemeProvider>
);

export { ThemeProvider };
