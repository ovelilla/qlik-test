// Vendors
import { DefaultTheme } from 'styled-components';
// Constants
import { DEFAULT_BORDERS } from './styles/borders/default.borders.theme';
import { DEFAULT_BORDER_RADIUS } from './styles/borderRadius/default.border-radius.theme';
import { DEFAULT_BREAKPOINTS } from './styles/breakpoints/default.breakpoints.theme';
import { DEFAULT_COLORS } from './styles/colors/default.colors.theme';
import { DEFAULT_FONT_SIZES } from './styles/fontSizes/default.font-sizes.theme';
import { DEFAULT_FONT_WEIGHTS } from './styles/fontWeights/default.font-weights.theme';
import { DEFAULT_HEIGHTS } from './styles/heights/default.heights.theme';
import { DEFAULT_OPACITIES } from './styles/opacities/default.opacities.theme';
import { DEFAULT_SHADOWS } from './styles/shadows/default.shadows.theme';
import { DEFAULT_SPACES } from './styles/spaces/default.spaces.theme';
import { DEFAULT_VISIBILITY } from './styles/visibility/default.visibility.theme';
import { DEFAULT_WIDTHS } from './styles/widths/default.widths.theme';

const DEFAULT_THEME: DefaultTheme = {
  borders: DEFAULT_BORDERS,
  borderRadius: DEFAULT_BORDER_RADIUS,
  breakpoints: DEFAULT_BREAKPOINTS,
  colors: DEFAULT_COLORS,
  fontSizes: DEFAULT_FONT_SIZES,
  fontWeights: DEFAULT_FONT_WEIGHTS,
  heights: DEFAULT_HEIGHTS,
  opacities: DEFAULT_OPACITIES,
  shadows: DEFAULT_SHADOWS,
  spaces: DEFAULT_SPACES,
  visibility: DEFAULT_VISIBILITY,
  widths: DEFAULT_WIDTHS,
} as const;

export { DEFAULT_THEME };
